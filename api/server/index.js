// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = 3001; // The port your backend will run on

// Middleware setup
app.use(cors()); // Enables cross-origin requests from your React app
app.use(express.json()); // Parses incoming JSON data

// Gemini API Setup
const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
    throw new Error("API key is missing. Check your .env file.");
}
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
let chat = model.startChat({ history: [] });

// Chat endpoint    
app.post('/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = await response.text();

        res.json({ text: text });
    } catch (error) {
        console.error('Error in chat endpoint:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// Start the server
/* app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); */
