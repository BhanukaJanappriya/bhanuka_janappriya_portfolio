const express = require('express');
const router = express.Router();
const { getExperience } = require('../controllers/portfolioController');

router.get('/', getExperience);

module.exports = router;
