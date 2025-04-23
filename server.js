
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
const Shipping = require('./models/Shipping');

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
    try {
        const items = await Shopper.find();
        res.json(items);
    } catch (err) {
        res.status(500).send("Error retrieving shoppers.");
    }
});
app.post('/api/shoppers', async (req, res) => {
    try {
        const item = new Shopper(req.body);
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send("Error adding shopper.");
    }
});

// --- Billing Routes ---
app.get('/api/billings', async (req, res) => {
    try {
        const items = await Billing.find();
        res.json(items);
    } catch (err) {
        res.status(500).send("Error retrieving billings.");
    }
});
app.post('/api/billings', async (req, res) => {
    try {
        const item = new Billing(req.body);
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send("Error adding billing.");
    }
});

// --- Return Routes ---
app.get('/api/returns', async (req, res) => {
    try {
        const items = await Return.find();
        res.json(items);
    } catch (err) {
        res.status(500).send("Error retrieving returns.");
    }
});
app.post('/api/returns', async (req, res) => {
    try {
        const item = new Return(req.body);
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send("Error adding return.");
    }
});

// --- Shipping Routes ---
app.get('/api/shippings', async (req, res) => {
    try {
        const items = await Shipping.find();
        res.json(items);
    } catch (err) {
        res.status(500).send("Error retrieving shippings.");
    }
});
app.post('/api/shippings', async (req, res) => {
    try {
        const item = new Shipping(req.body);
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(500).send("Error adding shipping.");
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
