// Define the default model ID to use. Let's default to the faster Flash model.
export const DEFAULT_CHAT_MODEL: string = 'gemini-1.5-flash';

interface ChatModel {
  id: string; // This will now be the Gemini model ID, e.g., 'gemini-1.5-pro'
  name: string; // User-friendly name for selection UI
  description: string;
}

// Update the list of available models for the UI selector
export const chatModels: Array<ChatModel> = [
  {
    id: 'gemini-1.5-flash', // Corresponds to the ID in myProvider
    name: 'Gemini 1.5 Flash',
    description: 'Fast and efficient model for general tasks.',
  },
  {
    id: 'gemini-1.5-pro', // Corresponds to the ID in myProvider
    name: 'Gemini 1.5 Pro',
    description: 'Most capable model for complex reasoning.',
  },
  // Add more models here if needed in the future
];
