const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Simple schema for testing
const txnSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['debit', 'credit'], default: 'debit' }
});
const Transaction = mongoose.model('Transaction', txnSchema);

// Health check
app.get('/', (req, res) => res.json({ ok: true, service: 'backend' }));

// Seed sample data
app.post('/api/txns/seed', async (req, res) => {
  const demo = await Transaction.create([
    { amount: 9.99, description: 'Netflix', type: 'debit' },
    { amount: 1500, description: 'Paycheck', type: 'credit' }
  ]);
  res.json(demo);
});

// List transactions
app.get('/api/txns', async (req, res) => {
  const data = await Transaction.find().sort({ date: -1 }).limit(20);
  res.json(data);
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`));
  } catch (e) {
    console.error('Startup error:', e.message);
    process.exit(1);
  }
}
start();

