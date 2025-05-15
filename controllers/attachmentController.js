const Attachment = require('../models/Attachment');

exports.getAttachments = async (req, res) => {
  try {
    const attachments = await Attachment.find();
    res.json(attachments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attachments' });
  }
};

exports.uploadAttachment = async (req, res) => {
  try {
    const attachment = new Attachment(req.body); // Puedes usar multer si estás subiendo archivos
    await attachment.save();
    res.status(201).json(attachment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload attachment' });
  }
};

exports.deleteAttachment = async (req, res) => {
  try {
    await Attachment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attachment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete attachment' });
  }
};

