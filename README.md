# OpenScaffold
modular structure for OpenAI experimentation 

🔑 API Key Notice
This project requires a valid OpenAI API key, which operates on a pay-as-you-go model.
You can obtain one from platform.openai.com.
Be aware that usage may incur costs based on model type and token volume.


You could also add a note in the .env setup section like:
# Required: OpenAI API key (paid)
OPENAI_API_KEY=your-api-key

Here’s how to get rolling with `@ai-sdk/openai` in VS Code:

npm init -y
npm install @ai-sdk/openai
---

🛠 Step-by-Step Setup for Node.js + AI SDK in VS Code

1. Install Node.js
If you haven’t already:
- Go to https://nodejs.org
- Install it (includes `npm`)

You can verify it’s working by running:
```bash
node -v
npm -v
```

2. Create Your Project Folder
```bash
mkdir ai-sdk-demo
cd ai-sdk-demo
npm init -y
```

3. Install the AI SDK + OpenAI Plugin
```bash
npm install ai @ai-sdk/openai
```

4. Create Your Entry File
Create a file called `index.js` or `main.ts` depending on your preference.

Example `index.js`:
```js
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

const result = await generateText({
  model: openai('gpt-4o'),
  prompt: 'Summarize the concept of modular architecture in Flutter.',
});

console.log(result.text);
```

> ⚠️ If you're using ES modules (`import` syntax), make sure your `package.json` includes:
```json
"type": "module"
```



