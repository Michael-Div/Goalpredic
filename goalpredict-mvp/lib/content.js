import fs from 'fs';
import path from 'path';

export function getContent() {
  const file = path.join(process.cwd(), 'data', 'content.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
