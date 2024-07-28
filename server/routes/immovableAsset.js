const express = require('express');
const router = express.Router();
const {
    createImmovableAsset,
    getImmovableAsset,
    getImmovableAssets,
    updateImmovableAsset,
    deleteImmovableAsset
} = require('../controllers/ImmovableController');

// Create a new immovable asset
router.post('/', createImmovableAsset);

// Get a single immovable asset by ID
router.get('/:id', getImmovableAsset);

// Get all immovable assets
router.get('/', getImmovableAssets);

// Update an immovable asset by ID
router.put('/:id', updateImmovableAsset);

// Delete an immovable asset by ID
router.delete('/:id', deleteImmovableAsset);

module.exports = router;
