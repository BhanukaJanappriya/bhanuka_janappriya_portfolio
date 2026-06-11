const express = require('express');
const router = express.Router();
const { getResearch } = require('../controllers/portfolioController');

router.get('/', getResearch);

module.exports = router;
