const express = require('express');
const { createReferral, upload } = require('../controllers/referralController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/refer', authenticateToken, upload.single('resume'), createReferral);

module.exports = router;
