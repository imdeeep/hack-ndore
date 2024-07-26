const fs = require('fs');
const path = require('path');
const googleGeminiService = require('../services/googleGeminiService');

const sampleDataPath = path.join(__dirname, '../data/sampleData.json');

exports.getAnswer = async (req, res) => {
    const { question } = req.body;
    try {
        const data = JSON.parse(fs.readFileSync(sampleDataPath, 'utf-8'));
        const chat = data.find(chat => chat.question.toLowerCase() === question.toLowerCase());

        if (chat) {
            res.json(chat.answer);
        } else {
            const answer = await googleGeminiService.getAnswerFromGoogle(question);
            res.json(answer);
        }
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
