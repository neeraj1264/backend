const mongoose = require('mongoose');

const customerdataSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String },
  phone: { type: Number },
  address: { type: String },
  timestamp: { type: String, required: true },
});

const customerdata = mongoose.model('customerdata', customerdataSchema);

module.exports = customerdata;
