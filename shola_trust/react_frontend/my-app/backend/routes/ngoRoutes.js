const express = require('express');
const { getNGOs } = require('../controllers/ngoController');
const router = express.Router();

router.get('/ngos', getNGOs);

module.exports = router;
