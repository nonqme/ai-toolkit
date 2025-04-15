import path from 'node:path';
import fs from 'node:fs';

import { activeWindow } from 'get-windows';
import screenshotDesktop from 'screenshot-desktop';
import sharp from 'sharp';

export type OnUpdate = {
  window: boolean;
  screenshots: number;
  fileName?: string;
  message?: string;
};

export type CapturePayload = {
  name: string;
  window: string;
  fps: number;
  output: string;
  onUpdate: (update: OnUpdate) => void;
};

export const captureWindow = async (payload: CapturePayload): Promise<void> => {
  const { name, window, fps, output, onUpdate } = payload;

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
  let numberOfScreenshots = 0;
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
      numberOfScreenshots += 1;
      onUpdate({
        window: true,
        screenshots: numberOfScreenshots,
        fileName,
      });
    } else {
      onUpdate({
        window: false,
        screenshots: numberOfScreenshots,
        message: `Window "${window}" not found.`,
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 / fps));
  }
};
