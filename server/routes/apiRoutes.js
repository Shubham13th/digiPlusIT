const express = require('express');
const router = express.Router();
const SimCard = require('../models/SIMCard');

router.post('/activate', async (req, res) => {
  const { simNumber } = req.body;
  try {
    let simCard = await SimCard.findOne({ simNumber });
    if (!simCard) {
      return res.status(404).json({ message: 'SIM Card not found' });
    }
    if (simCard.status === 'active') {
      return res.status(400).json({ message: 'SIM Card is already active' });
    }
    simCard.status = 'active';
    simCard.activationDate = new Date();
    await simCard.save();
    res.status(200).json({ message: 'SIM Card activated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/deactivate', async (req, res) => {
  const { simNumber } = req.body;
  try {
    let simCard = await SimCard.findOne({ simNumber });
    if (!simCard) {
      return res.status(404).json({ message: 'SIM Card not found' });
    }
    if (simCard.status === 'inactive') {
      return res.status(400).json({ message: 'SIM Card is already inactive' });
    }
    simCard.status = 'inactive';
    await simCard.save();
    res.status(200).json({ message: 'SIM Card deactivated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/sim-details/:simNumber', async (req, res) => {
  try {
    let simCard = await SimCard.findOne({ simNumber: req.params.simNumber });
    if (!simCard) {
      return res.status(404).json({ message: 'SIM Card not found' });
    }
    res.status(200).json(simCard);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
