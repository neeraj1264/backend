const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["received", "gave"], required: true },
  amount: { type: Number, required: true },
  description: { type: String }, 
  date: { type: Date, default: Date.now },
});

const customerdataSchema = new mongoose.Schema({
  // id: { type: String, required: true },
  name: { type: String },
  phone: { type: String, unique: true, index: true },
  address: { type: String },
  timestamp: { type: String, required: true },
  totalAmount: { type: Number, default: 0 },
  totalCash: { type: Number, default: 0 },
  totalOwed: { type: Number, default: 0 },
  transactions: [transactionSchema],  
  youwillget: { type: Number, default: 0 }, 
  receivedAmount: { type: Number, default: 0 },
});

const customerdata = mongoose.model('customerdata', customerdataSchema);

module.exports = customerdata;
