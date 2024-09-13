const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/financeDB', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  accountNumber: String,
  aadharCard: String,
  totalAmount: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

// Create User
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get User by Account Name
app.get('/api/users/:accountNumber', async (req, res) => {
  try {
    const user = await User.findOne({ accountNumber: req.params.accountNumber });
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Amount
app.put('/api/users/:accountNumber', async (req, res) => {
  try {
    const { amount, type } = req.body;
    const user = await User.findOne({ accountNumber: req.params.accountNumber });
    if (!user) return res.status(404).send('User not found');

    if (type === 'credit') {
      user.totalAmount += amount;
    } else if (type === 'debit') {
      user.totalAmount -= amount;
    }
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
