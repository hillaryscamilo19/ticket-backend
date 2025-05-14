const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/ticketController');
const Attachment = require('../models/Attachment');

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const { ticket_id } = req.body;

  const newAttachment = new Attachment({
    file_name: file.originalname,
    file_path: file.path,
    file_extension: file.mimetype,
    ticket_id
  });

  await newAttachment.save();
  res.status(201).json(newAttachment);
});

module.exports = router;
