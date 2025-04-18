import path from 'node:path';
import fs from 'node:fs';
import { createServer } from 'node:http';

import { askInput, askOutput } from './label-prompts.js';

export const label = async (): Promise<void> => {
  const input = path.resolve(await askInput());
  const output = path.resolve(await askOutput());

  const images = fs.readdirSync(input).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
  });

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  // Create an HTTP server
  const server = createServer((req, res) => {
    if (req.url === '/') {
      // Serve the HTML page
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`
        <html>
          <body>
            <div id="image-container">
              <img id="current-image" src="/images/${images[0]}" alt="Image" style="max-width: 100%; height: auto;" />
            </div>
            <button id="prev-button">Previous</button>
            <button id="next-button">Next</button>
            <script>
              const images = ${JSON.stringify(images)};
              let currentIndex = 0;

              document.getElementById('prev-button').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                document.getElementById('current-image').src = '/images/' + images[currentIndex];
              });

              document.getElementById('next-button').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                document.getElementById('current-image').src = '/images/' + images[currentIndex];
              });
            </script>
          </body>
        </html>
      `);
      res.end();
    } else if ((req.url ?? '').startsWith('/images/')) {
      // Serve the images
      const imageName = decodeURIComponent(
        (req.url ?? '').replace('/images/', '')
      );
      const imagePath = path.join(input, imageName);
      if (fs.existsSync(imagePath)) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        fs.createReadStream(imagePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Image not found');
      }
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });
};
