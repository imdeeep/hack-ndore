const fs = require('fs');
const path = require('path');
const googleGeminiService = require('../services/googleGeminiService');

const storyPath = path.join(__dirname, '../data/data.txt');
let conversationHistory = [];

exports.getAnswer = async (req, res) => {
    const { question } = req.body;
    try {
        const data = fs.readFileSync(storyPath, 'utf-8');
        
        const answer = await googleGeminiService.getAnswerFromGoogle(question, data, conversationHistory);
        const response = { question: question, answer: answer };
        conversationHistory.push(response);
        res.json(answer);
    } catch (err) {
        console.error('Error in getAnswer:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
