const db = require('../config/database');

// Save ebook lead
exports.saveLead = async (req, res) => {
  try {
    const { nome, sobrenome, email, celular } = req.body;

    // Validate required fields
    if (!nome || !sobrenome || !email || !celular) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios'
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

    // Normalize celular: remove non-digits
    const normalizedCelular = celular.replace(/\D/g, '');

    // Validate celular format (10 or 11 Brazilian digits)
    if (normalizedCelular.length < 10 || normalizedCelular.length > 11) {
      return res.status(400).json({
        success: false,
        message: 'Celular inválido. Use formato brasileiro (10 ou 11 dígitos)'
      });
    }

    // Get IP and User Agent
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Insert into database with normalized values
    const [result] = await db.query(
      'INSERT INTO ebook_leads (nome, sobrenome, email, celular, ip_address, user_agent) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, sobrenome, normalizedEmail, normalizedCelular, ipAddress, userAgent]
    );

    res.status(201).json({
      success: true,
      message: 'Dados salvos com sucesso!',
      data: {
        id: result.insertId,
        nome,
        sobrenome,
        email: normalizedEmail
      }
    });
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao salvar dados'
    });
  }
};

// Get all leads (admin only)
exports.getAllLeads = async (req, res) => {
  try {
    const [leads] = await db.query(
      'SELECT id, nome, sobrenome, email, celular, downloaded_at FROM ebook_leads ORDER BY downloaded_at DESC'
    );

    res.status(200).json({
      success: true,
      data: leads,
      total: leads.length
    });
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar leads'
    });
  }
};
