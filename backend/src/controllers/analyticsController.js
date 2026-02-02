const db = require('../config/database');

// Valid event types
const VALID_EVENT_TYPES = [
  'page_view',
  'section_view',
  'ebook_download',
  'newsletter_subscribe',
  'buy_click'
];

// Track analytics event
exports.trackEvent = async (req, res) => {
  try {
    const { event_type, page_url, section_name, session_id } = req.body;

    // Validate required fields
    if (!event_type || !session_id) {
      return res.status(400).json({
        success: false,
        message: 'event_type e session_id são obrigatórios'
      });
    }

    // Validate event_type
    if (!VALID_EVENT_TYPES.includes(event_type)) {
      return res.status(400).json({
        success: false,
        message: `event_type inválido. Use: ${VALID_EVENT_TYPES.join(', ')}`
      });
    }

    // Get IP and User Agent
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Upsert analytics_sessions
    // Only increment pages_visited for page_view events
    if (event_type === 'page_view') {
      await db.query(`
        INSERT INTO analytics_sessions (session_id, first_seen, last_seen, pages_visited, ip_address, user_agent)
        VALUES (?, NOW(), NOW(), 1, ?, ?)
        ON DUPLICATE KEY UPDATE
          last_seen = NOW(),
          pages_visited = pages_visited + 1
      `, [session_id, ipAddress, userAgent]);
    } else {
      // For other events, just update last_seen without incrementing pages_visited
      await db.query(`
        INSERT INTO analytics_sessions (session_id, first_seen, last_seen, pages_visited, ip_address, user_agent)
        VALUES (?, NOW(), NOW(), 0, ?, ?)
        ON DUPLICATE KEY UPDATE
          last_seen = NOW()
      `, [session_id, ipAddress, userAgent]);
    }

    // Insert analytics_events
    const [result] = await db.query(`
      INSERT INTO analytics_events (event_type, user_session, page_url, section_name, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [event_type, session_id, page_url || null, section_name || null, ipAddress, userAgent]);

    res.status(201).json({
      success: true,
      data: {
        id: result.insertId,
        event_type
      }
    });
  } catch (error) {
    console.error('Erro ao rastrear evento:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao rastrear evento'
    });
  }
};

// Get analytics summary (admin only)
exports.getMetrics = async (req, res) => {
  try {
    // Get date range from query params or default to last 30 days
    const { start_date, end_date } = req.query;

    // Definir período de consulta
    let sessionWhere, eventsWhere, sessionParams, eventsParams;

    if (start_date && end_date) {
      sessionWhere = 'first_seen >= ? AND first_seen <= DATE_ADD(?, INTERVAL 1 DAY)';
      eventsWhere = 'timestamp >= ? AND timestamp <= DATE_ADD(?, INTERVAL 1 DAY)';
      sessionParams = [start_date, end_date];
      eventsParams = [start_date, end_date];
    } else {
      sessionWhere = 'first_seen >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
      eventsWhere = 'timestamp >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
      sessionParams = [];
      eventsParams = [];
    }

    // Total unique visitors
    const [visitorsResult] = await db.query(
      `SELECT COUNT(DISTINCT session_id) as total_visitors
       FROM analytics_sessions
       WHERE ${sessionWhere}`,
      sessionParams
    );

    // Average time on site
    const [avgTimeResult] = await db.query(
      `SELECT AVG(TIMESTAMPDIFF(SECOND, first_seen, last_seen)) as avg_time_seconds
       FROM analytics_sessions
       WHERE ${sessionWhere}
         AND TIMESTAMPDIFF(SECOND, first_seen, last_seen) > 0`,
      sessionParams
    );

    // Average sections viewed per session
    const [sectionsResult] = await db.query(
      `SELECT AVG(section_count) as avg_sections
       FROM (
         SELECT user_session, COUNT(DISTINCT section_name) as section_count
         FROM analytics_events
         WHERE event_type = 'section_view'
           AND ${eventsWhere}
         GROUP BY user_session
       ) as section_stats`,
      eventsParams
    );

    // Ebook downloads
    const [ebookResult] = await db.query(
      `SELECT COUNT(*) as ebook_downloads
       FROM analytics_events
       WHERE event_type = 'ebook_download'
         AND ${eventsWhere}`,
      eventsParams
    );

    // Newsletter subscriptions
    const [newsletterResult] = await db.query(
      `SELECT COUNT(*) as newsletter_subs
       FROM analytics_events
       WHERE event_type = 'newsletter_subscribe'
         AND ${eventsWhere}`,
      eventsParams
    );

    // Buy button clicks
    const [buyResult] = await db.query(
      `SELECT COUNT(*) as buy_clicks
       FROM analytics_events
       WHERE event_type = 'buy_click'
         AND ${eventsWhere}`,
      eventsParams
    );

    // Daily stats for chart
    const [dailyStats] = await db.query(
      `SELECT
         DATE(timestamp) as date,
         COUNT(DISTINCT user_session) as visitors,
         SUM(CASE WHEN event_type = 'ebook_download' THEN 1 ELSE 0 END) as ebook_downloads,
         SUM(CASE WHEN event_type = 'newsletter_subscribe' THEN 1 ELSE 0 END) as newsletter_subs,
         SUM(CASE WHEN event_type = 'buy_click' THEN 1 ELSE 0 END) as buy_clicks
       FROM analytics_events
       WHERE ${eventsWhere}
       GROUP BY DATE(timestamp)
       ORDER BY date ASC`,
      eventsParams
    );

    res.status(200).json({
      success: true,
      data: {
        total_visitors: visitorsResult[0].total_visitors || 0,
        avg_time_on_site: Math.round(avgTimeResult[0].avg_time_seconds || 0),
        avg_sections_depth: sectionsResult[0].avg_sections ? parseFloat(Number(sectionsResult[0].avg_sections).toFixed(2)) : 0,
        ebook_downloads: ebookResult[0].ebook_downloads || 0,
        newsletter_subs: newsletterResult[0].newsletter_subs || 0,
        buy_clicks: buyResult[0].buy_clicks || 0,
        daily_stats: dailyStats
      }
    });
  } catch (error) {
    console.error('Erro ao buscar métricas:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar métricas'
    });
  }
};
