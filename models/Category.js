const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  list_departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }]
});

module.exports = mongoose.model('Category', categorySchema);
