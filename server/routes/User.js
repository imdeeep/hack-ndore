const express = require('express');
const router = express.Router();
const {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// Create a new user
router.post('/', createUser);

// Get a single user by ID
router.get('/:id', getUser);

// Get all users
router.get('/', getUsers);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
