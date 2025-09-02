// lib/aiClient.js
import 'dotenv/config';
import { openai } from '@ai-sdk/openai';

export function getAIClient() {
  return openai({
    apiKey: process.env.OPENAI_API_KEY
  });
}
//not a valid key in .env file
//for a security measurement the api key should be in .env file