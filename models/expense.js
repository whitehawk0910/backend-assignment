const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  splitMethod: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
  splits: [{ userId: mongoose.Schema.Types.ObjectId, amount: Number }]
});

module.exports = mongoose.model('Expense', expenseSchema);
