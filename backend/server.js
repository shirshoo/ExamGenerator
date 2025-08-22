const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-exam', async (req, res) => {
  try {
    const { topic, questionCount, generateAnswers } = req.body;

    if (!topic || !questionCount) {
      return res.status(400).json({ 
        error: 'Topic and question count are required' 
      });
    }

    if (questionCount < 1 || questionCount > 20) {
      return res.status(400).json({ 
        error: 'Question count must be between 1 and 20' 
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Generate a math exam for a primary school student with ${questionCount} questions on the topic of ${topic}. 
    
    Requirements:
    - Questions should be age-appropriate for grades 1-6
    - Include a mix of direct problems and simple word problems
    - Format each question clearly with proper numbering
    - Make questions progressively challenging
    - Only provide the question nothing else
    -  dont show Here is a math exam for a primary school student, focusing on addition:
    ${generateAnswers ? '- Include an answer key section at the end' : ''}
    
    Topic: ${topic}
    Number of questions: ${questionCount}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const examContent = response.text();

    res.json({
      success: true,
      exam: examContent,
      topic: topic,
      questionCount: questionCount
    });

  } catch (error) {
    console.error('Error generating exam:', error);
    res.status(500).json({
      error: 'Failed to generate exam. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
