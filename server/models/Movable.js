const mongoose = require('mongoose');

const options = { discriminatorKey: 'type', collection: 'movableAssets' };

const MovableAssetSchema = new mongoose.Schema({
    purchaseYear: { type: Number, required: true },
    amount: { type: Number, required: true },
    uid: { type: String, required: true, unique: true },
    review: { type: String },
    conditionRating: { type: Number, min: 0, max: 10 },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, options);

const MovableAsset = mongoose.model('MovableAsset', MovableAssetSchema);

const VehicleSchema = new mongoose.Schema({
    noPlate: { type: String, required: true },
});

const EquipmentSchema = new mongoose.Schema({
    totalAmount: { type: Number, required: true },
    presentInInventory: { type: Number, required: true },
    minimumRequiredAmount: { type: Number, required: true },
});

const Vehicle = MovableAsset.discriminator('Vehicle', VehicleSchema);
const Equipment = MovableAsset.discriminator('Equipment', EquipmentSchema);

module.exports = { MovableAsset, Vehicle, Equipment };
