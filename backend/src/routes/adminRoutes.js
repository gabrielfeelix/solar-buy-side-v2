const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const ebookController = require('../controllers/ebookController');
const newsletterController = require('../controllers/newsletterController');
const verifyToken = require('../middleware/verifyToken');

// All admin routes require JWT authentication
router.use(verifyToken);

// Analytics metrics
router.get('/metrics', analyticsController.getMetrics);

// Leads
router.get('/leads/ebook', ebookController.getAllLeads);
router.get('/leads/newsletter', newsletterController.getAllSubscribers);

module.exports = router;
