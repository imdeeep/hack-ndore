const { MovableAsset } = require('../models/Movable');
const Office = require('../models/Office');
//Update
exports.updateMovableAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, purchaseYear, amount, uid, noPlate, totalAmount, presentInInventory, minimumRequiredAmount, review, conditionRating, assignedTo } = req.body;

        let updatedFields;
        if (type === 'vehicle') {
            updatedFields = { purchaseYear, amount, uid, noPlate, review, conditionRating, assignedTo };
        } else if (type === 'equipment') {
            updatedFields = { purchaseYear, amount, uid, totalAmount, presentInInventory, minimumRequiredAmount, review, conditionRating, assignedTo };
        } else {
            return res.status(400).json({ message: 'Invalid asset type' });
        }

        const asset = await MovableAsset.findByIdAndUpdate(id, updatedFields, { new: true, runValidators: true });
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        res.json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
// Create

exports.createMovableAsset = async (req, res) => {
    try {
        const { type, purchaseYear, amount, uid, noPlate, totalAmount, presentInInventory, minimumRequiredAmount, review, conditionRating, assignedTo } = req.body;

        let newAsset;
        if (type === 'vehicle') {
            newAsset = new Vehicle({
                purchaseYear,
                amount,
                uid,
                noPlate,
                review,
                conditionRating,
                assignedTo
            });
        } else if (type === 'equipment') {
            newAsset = new Equipment({
                purchaseYear,
                amount,
                uid,
                totalAmount,
                presentInInventory,
                minimumRequiredAmount,
                review,
                conditionRating,
                assignedTo
            });
        } else {
            return res.status(400).json({ message: 'Invalid asset type' });
        }

        const asset = await newAsset.save();
        res.status(201).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
//Get

exports.getMovableAsset = async (req, res) => {
    try {
        const asset = await MovableAsset.findById(req.params.id).populate('assignedTo');
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMovableAssets = async (req, res) => {
    try {
        const assets = await MovableAsset.find().populate('assignedTo');
        res.json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
//Delete


exports.deleteMovableAsset = async (req, res) => {
    try {
        const asset = await MovableAsset.findByIdAndDelete(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.json({ message: 'Asset deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
//Assign



exports.assignMovableAssetToEmployee = async (req, res) => {
    try {
        const { officeId, employeeId, assetId } = req.body;

        // Find the office and asset
        const office = await Office.findById(officeId);
        const asset = await MovableAsset.findById(assetId);

        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }

        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }

        // Find the employee within the office
        const employee = office.employees.id(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found in the office' });
        }

        // Check if the asset is already assigned
        if (asset.assignedTo) {
            return res.status(400).json({ message: 'Asset is already assigned to another employee' });
        }

        // Assign the asset to the employee
        asset.assignedTo = employee._id;
        await asset.save();

        // Update the employee's assigned assets
        employee.assignedAssets.push(asset._id);
        await office.save();

        res.json({ message: 'Asset assigned successfully', asset });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...