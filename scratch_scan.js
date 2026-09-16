import fs from 'fs';
import path from 'path';

const now = Date.now();
const oneHourAgo = now - 60 * 60 * 1000;

function scan(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (!e.isDirectory()) {
        const stat = fs.statSync(full);
        if (stat.mtimeMs > oneHourAgo) {
          console.log('User folder modified:', full);
        }
      }
    }
  } catch(err) {}
}

scan('C:\\Users\\regre\\Downloads');
scan('C:\\Users\\regre\\Desktop');
console.log('User scan done.');
