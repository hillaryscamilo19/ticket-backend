require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

app.use('/api/tickets', require('./routes/tickets'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/messages', require('./routes/message'));
app.use('/api/categories', require('./routes/category'));
app.use('/api/attachments', require('./routes/attachment'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
