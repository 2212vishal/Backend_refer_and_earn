const prisma = require('../config/databaseConnection');
const multer = require('multer');
const mailSender = require('../utils/mailSender');
const { SuccessEmail } = require('../mail/template/SuccessEmail');
const { uploadPDFToCloudinary } = require('../utils/pdfuploader');

// Set up multer for file uploads with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

const createReferral = async (req, res) => {
  const { referName, referEmail, referWorkId, refereeName, refereeEmail, description } = req.body;
  const fileBuffer = req.file ? req.file.buffer : null;

  if (!fileBuffer) {
    return res.status(400).json({ error: 'Resume file is required' });
  }

  try {
    // Upload PDF to Cloudinary
    const resumeUrl = await uploadPDFToCloudinary(fileBuffer);

    const referral = await prisma.referral.create({
      data: {
        referName,
        referEmail,
        referWorkId,
        refereeName,
        refereeEmail,
        description,
        resume: resumeUrl // Save the Cloudinary URL in the database
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
