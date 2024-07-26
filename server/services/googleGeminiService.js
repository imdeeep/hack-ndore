const axios = require('axios');

const apiKey = process.env.API_KEY;
const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;

exports.getAnswerFromGoogle = async (question) => {
    try {
        const response = await axios.post(apiUrl, {
            contents: [
                {
                    role: "user",
                    parts: [{ text: question }]
                }
            ]
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.data && response.data.candidates) {
            const answer = response.data.candidates[0].content.parts[0].text;
            return answer || 'Sorry, I could not answer this , and there is a error in your response handling.';
        } else {
            return 'Sorry, I could not get an answer.';
        }
    } catch (error) {
        console.error(error);
        return 'Sorry, there is a error.';
    }
};
