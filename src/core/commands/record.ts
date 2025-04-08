import path from 'node:path';
import fs from 'node:fs';

import screenshot from 'screenshot-desktop';

export type RecordOptions = {
  name: string;
  fps: number;
  window: string;
  output: string;
};

export default async function record(options: RecordOptions) {
  const { name, fps, window, output } = options;

  if (!name) {
    throw new Error('Name is required');
  }
  if (!fps) {
    throw new Error('FPS is required');
  }
  if (!window) {
    throw new Error('Window name is required');
  }
  if (!output) {
    throw new Error('Output directory is required');
  }

  const outputDir = path.resolve(output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  let screenNumber = 0;
  // Capture the screenshots
  const interval = 1000 / fps;
  setInterval(async () => {
    try {
      const img = await screenshot({
        format: 'png',
      });
      const fileName = `${name}-${Date.now()}.png`;
      fs.writeFileSync(path.join(outputDir, fileName), img);
      screenNumber++;
      console.log(screenNumber);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  }, interval);
  console.log(`Capturing screenshots every ${interval}ms...`);
}
