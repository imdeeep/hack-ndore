const ImmovableAsset = require('../models/Immovable');
//Create
exports.createImmovableAsset = async (req, res) => {
    try {
        const { type, maintenanceBudget, budgetSpent, location, reviews } = req.body;

        const newAsset = new ImmovableAsset({
            type,
            maintenanceBudget,
            budgetSpent,
            location,
            reviews,
        });

        const asset = await newAsset.save();
        res.status(201).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
//Get

exports.getImmovableAsset = async (req, res) => {
    try {
        const asset = await ImmovableAsset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getImmovableAssets = async (req, res) => {
    try {
        const assets = await ImmovableAsset.find();
        res.json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
//Update

exports.updateImmovableAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, maintenanceBudget, budgetSpent, location, reviews } = req.body;

        const updatedFields = { type, maintenanceBudget, budgetSpent, location, reviews };

        const asset = await ImmovableAsset.findByIdAndUpdate(id, updatedFields, { new: true, runValidators: true });
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        res.json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//...
//Delete
exports.deleteImmovableAsset = async (req, res) => {
    try {
        const asset = await ImmovableAsset.findByIdAndDelete(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.json({ message: 'Asset deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
