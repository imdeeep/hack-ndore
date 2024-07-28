const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    assignedAssets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MovableAsset' }],
});

const OfficeSchema = new mongoose.Schema({
    location: { type: String, required: true },
    budgetAllocated: { type: Number, required: true },
    budgetSpent: { type: Number, required: true },
    numEmployees: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    subratings: {
        maintenance: { type: Number, default: 0 },
        reviews: { type: Number, default: 0 },
        budgetEfficiency: { type: Number, default: 0 },
    },
    employees: [EmployeeSchema],
    movableAssets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MovableAsset' }],
    immovableAssets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ImmovableAsset' }],
});

module.exports = mongoose.model('Office', OfficeSchema);
