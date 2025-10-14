// api/index.js

// 1. IMPORT GOOGLE AI LIBRARY
import { GoogleGenerativeAI } from '@google/generative-ai';
import express from 'express';

// 2. INITIALIZE GEMINI AI WITH API KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 3. MAIN SERVERLESS FUNCTION
export default async function handler(req, res) {

  console.log(' API endpoint hit! Method:', req.method);
  console.log(' Request body:', req.body);
  console.log(' API Key exists:', !!process.env.GEMINI_API_KEY);
  
  // 4. HANDLE CORS - Allow requests from any domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 5. HANDLE PREFLIGHT REQUESTS (Browser check before actual request)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 6. ONLY ALLOW POST REQUESTS
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  try {
    // 7. GET USER MESSAGE FROM REQUEST BODY
    const { message } = req.body;
    
    // 8. VALIDATE THAT MESSAGE EXISTS
    if (!message || message.trim() === '') {
      return res.status(400).json({ 
        error: 'Message is required and cannot be empty.' 
      });
    }

    // 9. CHECK IF API KEY IS AVAILABLE
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is missing from environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: API key missing.' 
      });
    }

    // 10. INITIALIZE GEMINI MODEL
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // 11. SEND MESSAGE TO GEMINI AI
    const result = await model.generateContent(message);
    
    // 12. GET THE RESPONSE FROM GEMINI
    const response = await result.response;
    const text = response.text();

    // 13. RETURN SUCCESS RESPONSE TO FRONTEND
    res.status(200).json({ 
      text: text,
      success: true 
    });
    
  } catch (error) {
    // 14. HANDLE ANY ERRORS THAT OCCUR
    console.error('Gemini API error:', error);
    
    // 15. RETURN USER-FRIENDLY ERROR MESSAGE
    res.status(500).json({ 
      error: 'Sorry, I encountered an error while processing your request.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}