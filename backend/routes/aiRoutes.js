require("dotenv").config();
const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

router.post("/resume-review", async (req, res) => {
  try {
    const { resumeText } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Review this resume:

${resumeText}

Provide:
1. Strengths
2. Weaknesses
3. Missing Skills
4. Improvement Suggestions`
    });

    res.json({
      success: true,
      feedback: response.text
    });

  } catch (error) {
  console.log("Gemini Error:", error);

  res.status(500).json({
    error: error.message
  });
}
});
router.post("/skill-gap", async (req, res) => {
  try {
    const { skills, jobRole } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Student Skills: ${skills}

Target Job Role: ${jobRole}

Analyze:
1. Current Skills
2. Missing Skills
3. Learning Roadmap
4. Improvement Suggestions
`
    });

    res.json({
      success: true,
      result: response.text
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
router.post("/interview-questions", async (req, res) => {
  try {
    const { jobRole } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Generate 15 interview questions for:

${jobRole}

Include:
1. Technical Questions
2. HR Questions
3. Project Questions
`
    });

    res.json({
      success: true,
      questions: response.text
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;