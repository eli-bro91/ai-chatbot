import {
  customProvider,
  // extractReasoningMiddleware, // Reasoning middleware might need adjustment for Gemini or removal
  // wrapLanguageModel, // Wrapping might need adjustment
} from 'ai';
// import { groq } from '@ai-sdk/groq'; // Remove Groq
// import { xai } from '@ai-sdk/xai'; // Remove XAI
import { google } from '@ai-sdk/google'; // Add Google provider
import { isTestEnvironment } from '../constants';
import {
  // artifactModel, // Keep test models if needed, but production path changes
  chatModel, // Keep test models if needed
  reasoningModel, // Keep test models if needed
  titleModel, // Keep test models if needed
} from './models.test'; // Assuming test models remain for now

// Define the Google provider instance, ensuring the API key is read from environment variables
// Note: The @ai-sdk/google package automatically looks for GOOGLE_GENERATIVE_AI_API_KEY
const googleProvider = google;

export const myProvider = isTestEnvironment
  ? customProvider({
      // Keep test setup if necessary for local testing/CI
      languageModels: {
        'gemini-1.5-pro': chatModel, // Map test model to Gemini ID for consistency if needed
        'gemini-1.5-flash': reasoningModel, // Example mapping
        // Add other test models as needed
      },
    })
  : customProvider({
      // Production setup using Google Gemini
      languageModels: {
        // Using specific Gemini model IDs directly
        'gemini-1.5-pro': googleProvider('models/gemini-1.5-pro-latest'),
        'gemini-1.5-flash': googleProvider('models/gemini-1.5-flash-latest'),
        // Add other models if needed, e.g., for title generation or artifacts
        // 'title-model': googleProvider('models/gemini-1.5-flash-latest'), // Example
        // 'artifact-model': googleProvider('models/gemini-1.5-pro-latest'), // Example
      },
      // Add image models if Gemini Vision Pro is intended later
      // imageModels: {
      //   'gemini-pro-vision': googleProvider('models/gemini-pro-vision'),
      // },
    });
