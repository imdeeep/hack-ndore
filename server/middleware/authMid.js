const User = require('../models/User');

const checkRole = (roles) => {
    return (req, res, next) => {
        if (req.session && roles.includes(req.session.role)) {
            return next();
        } else {
            return res.status(403).json({ message: 'Access denied' });
        }
    };
};

module.exports = { checkRole };
