const express = require('express');
const router = express.Router();
const { getCertifications } = require('../controllers/portfolioController');

router.get('/', getCertifications);

module.exports = router;
