const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/getAnswer', chatController.getAnswer);

module.exports = router;
