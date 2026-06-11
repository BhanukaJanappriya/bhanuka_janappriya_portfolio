const express = require('express');
const router = express.Router();
const { getSkills } = require('../controllers/portfolioController');

router.get('/', getSkills);

module.exports = router;
