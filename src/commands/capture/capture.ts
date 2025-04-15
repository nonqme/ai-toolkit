import path from 'node:path';
import fs from 'node:fs';

import { activeWindow } from 'get-windows';
import screenshotDesktop from 'screenshot-desktop';
import sharp from 'sharp';

import { askName, askWindow, askFps, askOutput } from './capture-prompts.js';

export const capture = async (): Promise<void> => {
  const name = await askName();
  const window = (await askWindow()).toLowerCase();
  const fps = parseInt(await askFps(), 10);
  const output = path.resolve(await askOutput());

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  while (true) {
    const currentWindow = await activeWindow();
    if (currentWindow && currentWindow.title.toLowerCase().includes(window)) {
      const { x, y, width, height } = currentWindow.bounds;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = path.join(output, `${name}-${timestamp}.png`);
      const screen = await screenshotDesktop({ format: 'png' });
      const croppedScreen = await sharp(screen)
        .extract({ left: x, top: y, width, height })
        .toBuffer();
      fs.writeFileSync(fileName, croppedScreen);
    } else {
      console.log(`Window "${window}" not found. Waiting for it to appear...`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 / fps));
  }
};
