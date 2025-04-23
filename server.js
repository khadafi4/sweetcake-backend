
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

// Models
const Product = require('./models/Product');
app.get('/api/products', async (req, res) => {
  try {
    const items = await Product.find();
    res.json(items);
  } catch (err) {
    res.status(500).send("Error retrieving products.");
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
