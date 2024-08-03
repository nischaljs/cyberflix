import { GoogleGenerativeAI } from "@google/generative-ai";

// Check if the API key is properly loaded
const apiKey = import.meta.env.VITE_GEMINI_API;
if (!apiKey) {
  console.error("API key is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
