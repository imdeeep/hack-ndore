const mongoose = require('mongoose');

const ImmovableAssetSchema = new mongoose.Schema({
    type: { type: String, enum: ['park', 'building', 'toilet'], required: true },
    maintenanceBudget: { type: Number, required: true },
    budgetSpent: { type: Number, required: true },
    location: { type: String, required: true },
    reviews: [String],
});

module.exports = mongoose.model('ImmovableAsset', ImmovableAssetSchema);
