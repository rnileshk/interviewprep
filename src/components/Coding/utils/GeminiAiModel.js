import {
  HarmCategory,
  HarmBlockThreshold,
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GENERIC_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generativeConfig = {
  temperature: 1,
  maxOutputTokens: 8192,
  topP: 0.95,
  topK: 64,
  responseMimeType: "text/plain", // ✅ Corrected typo
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export const chatSession = model.startChat({
  generativeConfig,
  safetySettings,
});
