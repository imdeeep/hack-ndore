const express = require('express');
const router = express.Router();
const {
    createMovableAsset,
    getMovableAsset,
    getMovableAssets,
    updateMovableAsset,
    deleteMovableAsset,
    assignMovableAssetToEmployee
} = require('../controllers/MoveableController');

// Create a new movable asset
router.post('/', createMovableAsset);

// Get a single movable asset by ID
router.get('/:id', getMovableAsset);

// Get all movable assets
router.get('/', getMovableAssets);

// Update a movable asset by ID
router.put('/:id', updateMovableAsset);

// Delete a movable asset by ID
router.delete('/:id', deleteMovableAsset);

// Assign a movable asset to an employee
router.put('/assign', assignMovableAssetToEmployee);

module.exports = router;
