const axios = require('axios');

const apiKey = process.env.API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;

exports.getAnswerFromGoogle = async (question, data, conversationHistory) => {
    try {
        const conversationHistoryText = conversationHistory.map(item => `${item.question}: ${item.answer}`).join('\n');

        const response = await axios.post(apiUrl, {
            contents: [
                {
                    role: "user",
                    parts: [{ text: question }]
                },
                {
                    role: "user",
                    parts: [{ text: `Context:\n${data}\n\nConversation History:\n${conversationHistoryText}` }]
                }
            ]
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.data && response.data.candidates) {
            const answer = response.data.candidates[0].content.parts[0].text;
            return answer || 'Sorry, I could not answer this, and there is an error in your response handling.';
        } else {
            return 'Sorry, I could not get an answer.';
        }
    } catch (error) {
        console.error('Error in getAnswerFromGoogle:', error.response ? error.response.data : error.message);
        return 'Sorry, there is an error.';
    }
};
