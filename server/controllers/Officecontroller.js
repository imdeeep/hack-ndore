const Office = require('../models/Office');

//Create
exports.createOffice = async (req, res) => {
    try {
        const { location, budgetAllocated, budgetSpent, numEmployees, subratings, employees, movableAssets, immovableAssets } = req.body;

        const newOffice = new Office({
            location,
            budgetAllocated,
            budgetSpent,
            numEmployees,
            subratings,
            employees,
            movableAssets,
            immovableAssets
        });

        const office = await newOffice.save();
        res.status(201).json(office);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//...
// Read
exports.getOffice = async (req, res) => {
    try {
        const office = await Office.findById(req.params.id).populate('employees').populate('movableAssets').populate('immovableAssets');
        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }
        res.json(office);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOffices = async (req, res) => {
    try {
        const offices = await Office.find().populate('employees').populate('movableAssets').populate('immovableAssets');
        res.json(offices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//..
// Update


exports.updateOffice = async (req, res) => {
    try {
        const updatedOffice = await Office.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedOffice) {
            return res.status(404).json({ message: 'Office not found' });
        }
        res.json(updatedOffice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
// Delete


exports.deleteOffice = async (req, res) => {
    try {
        const office = await Office.findByIdAndDelete(req.params.id);
        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }
        res.json({ message: 'Office deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...

// Employee......


exports.addEmployee = async (req, res) => {
    try {
        const { officeId, name, position, department } = req.body;
        const office = await Office.findById(officeId);

        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }

        const newEmployee = { name, position, department, assignedAssets: [] };
        office.employees.push(newEmployee);
        await office.save();

        res.status(201).json(office);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
// Update


exports.getEmployees = async (req, res) => {
    try {
        const office = await Office.findById(req.params.officeId).populate('employees.assignedAssets');

        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }

        res.json(office.employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
// Delete


exports.removeEmployee = async (req, res) => {
    try {
        const { officeId, employeeId } = req.body;
        const office = await Office.findById(officeId);

        if (!office) {
            return res.status(404).json({ message: 'Office not found' });
        }

        const employee = office.employees.id(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employee.remove();
        await office.save();

        res.json({ message: 'Employee removed', office });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//...
