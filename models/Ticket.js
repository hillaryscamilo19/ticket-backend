const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  assigned_department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  assigned_users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  created_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  status: Number
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
