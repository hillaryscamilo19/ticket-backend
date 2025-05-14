const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
  file_name: String,
  file_path: String,
  file_extension: String,
  ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }
});

module.exports = mongoose.model('Attachment', attachmentSchema);
