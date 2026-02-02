const db = require('../config/database');

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email é obrigatório'
      });
    }

    // Normalize email: trim and lowercase
    const normalizedEmail = email.trim().toLowerCase();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido'
      });
    }

    // Get IP and User Agent
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Insert into database with normalized email
    const [result] = await db.query(
      'INSERT INTO newsletter_subscribers (email, ip_address, user_agent) VALUES (?, ?, ?)',
      [normalizedEmail, ipAddress, userAgent]
    );

    res.status(201).json({
      success: true,
      message: 'Email cadastrado com sucesso!',
      data: {
        id: result.insertId,
        email: normalizedEmail
      }
    });
  } catch (error) {
    // Check for duplicate email
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        success: false,
        message: 'Este email já está cadastrado'
      });
    }

    console.error('Erro ao cadastrar newsletter:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao cadastrar email'
    });
  }
};

// Get all subscribers (admin only)
exports.getAllSubscribers = async (req, res) => {
  try {
    const [subscribers] = await db.query(
      'SELECT id, email, subscribed_at FROM newsletter_subscribers ORDER BY subscribed_at DESC'
    );

    res.status(200).json({
      success: true,
      data: subscribers,
      total: subscribers.length
    });
  } catch (error) {
    console.error('Erro ao buscar inscritos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar inscritos'
    });
  }
};
