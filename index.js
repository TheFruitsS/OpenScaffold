import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { getAIClient } from './lib/aiClient.js';
//not a valid key in getAIClient aiClient.js

const client = getAIClient();

const { text } = await generateText({
  model: client('gpt-4-turbo'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
console.log(text);
