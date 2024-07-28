const express = require('express');
const router = express.Router();
const { addEmployee, getEmployees, updateEmployee, removeEmployee } = require('../controllers/Officecontroller');

// Add a new employee to an office
router.post('/', addEmployee);

// Get all employees of an office
router.get('/:officeId', getEmployees);

// Update an employee in an office
router.put('/', updateEmployee);

// Remove an employee from an office
router.delete('/', removeEmployee);

module.exports = router;
