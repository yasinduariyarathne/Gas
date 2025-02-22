const mongoose = require('mongoose');

const gasRequestSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    outlet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Outlet', required: true },
    request_date: { type: Date, default: Date.now },
    expected_pickup_date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'reallocated', 'completed'], default: 'pending' },
    token: { type: String, unique: true },
});

module.exports = mongoose.model('GasRequest', gasRequestSchema);