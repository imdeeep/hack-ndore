const express = require('express');
const router = express.Router();
const { createOffice, getOffice, getOffices, updateOffice, deleteOffice } = require('../controllers/Officecontroller');

// Create a new office
router.post('/', createOffice);

// Get a single office by ID
router.get('/:id', getOffice);

// Get all offices
router.get('/', getOffices);

// Update an office by ID
router.put('/:id', updateOffice);

// Delete an office by ID
router.delete('/:id', deleteOffice);

module.exports = router;
