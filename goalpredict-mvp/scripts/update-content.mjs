import fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const file = path.join(process.cwd(), 'data', 'content.json');
const current = JSON.parse(await fs.readFile(file, 'utf8'));

const prompt = `You are the content editor for a professional football prediction website. Update the supplied JSON for the next 48-hour cycle. Keep the exact JSON structure. Focus on Premier League, La Liga, Serie A, Bundesliga, Ligue 1 and Champions League. Do not invent fixtures, scores, injuries or news. If reliable current information is unavailable, write conservative evergreen analysis instead. Predictions must be framed as probabilities/analysis, never guarantees. Return JSON only. Current content:\n${JSON.stringify(current)}`;

const response = await client.responses.create({ model: process.env.OPENAI_MODEL || 'gpt-5-mini', input: prompt });
const text = response.output_text.trim().replace(/^```json\s*/, '').replace(/```$/, '');
const next = JSON.parse(text);
next.updatedAt = new Date().toISOString();
await fs.writeFile(file, JSON.stringify(next, null, 2) + '\n');
console.log('Content updated:', next.updatedAt);
