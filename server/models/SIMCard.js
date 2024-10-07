const mongoose = require('mongoose');

const SIMCardSchema = new mongoose.Schema({
    sim_number: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    activation_date: { type: Date, default: null },
});

const SIMCard = mongoose.model('SIMCard', SIMCardSchema);
module.exports = SIMCard;
