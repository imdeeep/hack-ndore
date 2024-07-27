const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Chat', ChatSchema);
