import fs from 'node:fs';
import path from 'node:path';

const source = path.resolve('src/core/label/public');
const destination = path.resolve('dist/core/label/public');

fs.mkdirSync(destination, { recursive: true });

fs.readdirSync(source).forEach((file) => {
  fs.copyFileSync(path.join(source, file), path.join(destination, file));
});

console.log('Static files copied to dist.');
