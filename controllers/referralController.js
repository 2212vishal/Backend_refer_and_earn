const prisma = require('../config/databaseConnection');
const multer = require('multer');
const path = require('path');
const mailSender = require('../utils/mailSender');
const { SuccessEmail } = require('../mail/template/SuccessEmail');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

const createReferral = async (req, res) => {
  const { referName, referEmail, referWorkId, refereeName, refereeEmail, description } = req.body;
  const resume = req.file ? req.file.path : null;

  if (!resume) {
    return res.status(400).json({ error: 'Resume file is required' });
  }

  try {
    const referral = await prisma.referral.create({
      data: {
        referName,
        referEmail,
        referWorkId,
        refereeName,
        refereeEmail,
        description,
        resume
      }
    });

    const emailBody = SuccessEmail(referName, referEmail, referWorkId, refereeName, refereeEmail, description);
    const mailResponse = await mailSender(refereeEmail, 'Successful Referral Email', emailBody);

    console.log('Email sent successfully:', mailResponse.response);
    res.status(201).json(referral);
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createReferral, upload };
