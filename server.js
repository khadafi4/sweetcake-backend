
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// MODELS
const Product = require('./models/Product');
const Shopper = require('./models/Shopper');
const Billing = require('./models/Billing');
const Return = require('./models/Return');

// --- Product Routes ---
app.get('/api/products', async (req, res) => {
  try { res.json(await Product.find()); }
  catch { res.status(500).send("Error retrieving products."); }
});
app.post('/api/products', async (req, res) => {
  try { res.json(await Product.create(req.body)); }
  catch { res.status(500).send("Error adding product."); }
});
app.put('/api/products/:id', async (req, res) => {
  try { res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})); }
  catch { res.status(500).send("Error updating product."); }
});
app.delete('/api/products/:id', async (req, res) => {
  try { res.json(await Product.findByIdAndDelete(req.params.id)); }
  catch { res.status(500).send("Error deleting product."); }
});

// --- Shopper Routes ---
app.get('/api/shoppers', async (req, res) => {
  try { res.json(await Shopper.find()); }
  catch { res.status(500).send("Error retrieving shoppers."); }
});
app.post('/api/shoppers', async (req, res) => {
  try { res.json(await Shopper.create(req.body)); }
  catch { res.status(500).send("Error adding shopper."); }
});

// --- Billing Routes ---
app.get('/api/billings', async (req, res) => {
  try { res.json(await Billing.find()); }
  catch { res.status(500).send("Error retrieving billings."); }
});
app.post('/api/billings', async (req, res) => {
  try { res.json(await Billing.create(req.body)); }
  catch { res.status(500).send("Error submitting billing."); }
});

// --- Return Routes ---
app.get('/api/returns', async (req, res) => {
  try { res.json(await Return.find()); }
  catch { res.status(500).send("Error retrieving returns."); }
});
app.post('/api/returns', async (req, res) => {
  try { res.json(await Return.create(req.body)); }
  catch { res.status(500).send("Error submitting return."); }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
