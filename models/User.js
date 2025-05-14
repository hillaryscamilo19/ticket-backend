const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone_ext: Number,
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  role: Number,
  username: String,
  password: String,
  status: Boolean
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
