import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: Date,
  category: String,
  budget:Number,
});

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);