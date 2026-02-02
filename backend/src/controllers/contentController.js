const db = require('../config/database');

// Get all content sections
exports.getAllSections = async (req, res) => {
  try {
    const [sections] = await db.query(
      'SELECT section_id, section_name, texts, images FROM content_sections'
    );

    // Parse JSON fields
    const parsedSections = sections.map(section => ({
      id: section.section_id,
      name: section.section_name,
      texts: typeof section.texts === 'string' ? JSON.parse(section.texts) : section.texts,
      images: typeof section.images === 'string' ? JSON.parse(section.images) : section.images
    }));

    res.status(200).json({
      success: true,
      data: parsedSections
    });
  } catch (error) {
    console.error('Erro ao buscar seções:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar seções'
    });
  }
};

// Get single section
exports.getSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    const [sections] = await db.query(
      'SELECT section_id, section_name, texts, images FROM content_sections WHERE section_id = ?',
      [sectionId]
    );

    if (sections.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Seção não encontrada'
      });
    }

    const section = sections[0];

    res.status(200).json({
      success: true,
      data: {
        id: section.section_id,
        name: section.section_name,
        texts: typeof section.texts === 'string' ? JSON.parse(section.texts) : section.texts,
        images: typeof section.images === 'string' ? JSON.parse(section.images) : section.images
      }
    });
  } catch (error) {
    console.error('Erro ao buscar seção:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar seção'
    });
  }
};

// Update section
exports.updateSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const { section_name, texts, images } = req.body;

    // Check if section exists
    const [existing] = await db.query(
      'SELECT section_id FROM content_sections WHERE section_id = ?',
      [sectionId]
    );

    if (existing.length === 0) {
      // Insert new section
      await db.query(
        'INSERT INTO content_sections (section_id, section_name, texts, images) VALUES (?, ?, ?, ?)',
        [sectionId, section_name, JSON.stringify(texts), JSON.stringify(images)]
      );
    } else {
      // Update existing section
      await db.query(
        'UPDATE content_sections SET section_name = ?, texts = ?, images = ? WHERE section_id = ?',
        [section_name, JSON.stringify(texts), JSON.stringify(images), sectionId]
      );
    }

    res.status(200).json({
      success: true,
      message: 'Seção atualizada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao atualizar seção:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar seção'
    });
  }
};

// Get global assets
exports.getGlobalAssets = async (req, res) => {
  try {
    const [assets] = await db.query('SELECT asset_key, asset_value FROM global_assets');

    const assetsObject = {};
    assets.forEach(asset => {
      assetsObject[asset.asset_key] = asset.asset_value;
    });

    res.status(200).json({
      success: true,
      data: assetsObject
    });
  } catch (error) {
    console.error('Erro ao buscar assets:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar assets'
    });
  }
};

// Update global asset
exports.updateGlobalAsset = async (req, res) => {
  try {
    const { key, value } = req.body;

    if (!key || !value) {
      return res.status(400).json({
        success: false,
        message: 'Key e value são obrigatórios'
      });
    }

    await db.query(
      'INSERT INTO global_assets (asset_key, asset_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE asset_value = ?',
      [key, value, value]
    );

    res.status(200).json({
      success: true,
      message: 'Asset atualizado com sucesso'
    });
  } catch (error) {
    console.error('Erro ao atualizar asset:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar asset'
    });
  }
};

// Get global settings
exports.getGlobalSettings = async (req, res) => {
  try {
    const [settings] = await db.query('SELECT setting_key, setting_value FROM global_settings');

    const settingsObject = {};
    settings.forEach(setting => {
      settingsObject[setting.setting_key] = setting.setting_value;
    });

    res.status(200).json({
      success: true,
      data: settingsObject
    });
  } catch (error) {
    console.error('Erro ao buscar settings:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar settings'
    });
  }
};

// Update global setting
exports.updateGlobalSetting = async (req, res) => {
  try {
    const { key, value } = req.body;

    if (!key || !value) {
      return res.status(400).json({
        success: false,
        message: 'Key e value são obrigatórios'
      });
    }

    await db.query(
      'INSERT INTO global_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?',
      [key, value, value]
    );

    res.status(200).json({
      success: true,
      message: 'Setting atualizado com sucesso'
    });
  } catch (error) {
    console.error('Erro ao atualizar setting:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar setting'
    });
  }
};
