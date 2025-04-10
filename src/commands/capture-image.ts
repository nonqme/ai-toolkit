import path from 'node:path';

import { activeWindow } from 'get-windows';
import screenshotDesktop from 'screenshot-desktop';

import {
  askForName,
  askForWindow,
  askForFps,
  askForOutput,
} from '../utils/prompts.js';

import {
  validateName,
  validateWindowName,
  validateFps,
  validateOutput,
} from '../utils/validation.js';

export type CaptureOptions = {
  name?: string;
  window?: string;
  fps?: string;
  output?: string;
};

export default async function captureImage(captureOptions: CaptureOptions) {
  console.clear();
  let { name, window, fps, output } = captureOptions;

  if (!name) {
    name = await askForName();
  } else {
    const nameValidation = validateName(name);
    if (nameValidation !== true) {
      console.error(nameValidation);
      return;
    }
  }

  if (!window) {
    window = await askForWindow();
  } else {
    const windowValidation = validateWindowName(window);
    if (windowValidation !== true) {
      console.error(windowValidation);
      return;
    }
  }

  if (!fps) {
    fps = await askForFps();
  } else {
    const fpsValidation = validateFps(fps);
    if (fpsValidation !== true) {
      console.error(fpsValidation);
      return;
    }
  }

  if (!output) {
    output = await askForOutput();
  } else {
    const outputValidation = validateOutput(output);
    if (outputValidation !== true) {
      console.error(outputValidation);
      return;
    }
  }

  console.log(`Starting capture for window: ${window}`);
  const interval = 1000 / parseInt(fps, 10);

  while (true) {
    const activeWindowName = await activeWindow();
    if (activeWindowName?.owner.name.toLocaleLowerCase().includes(window)) {
      console.log(`Capturing screenshot from ${activeWindowName.owner.name}`);
      try {
        const outputDir = path.resolve(output);
        const fileName = `${name}-${Date.now()}.png`;
        const filePath = path.join(outputDir, fileName);
        await screenshotDesktop({ filename: filePath });
        console.log(`Screenshot saved to ${filePath}`);
      } catch (error) {
        console.error('Error capturing screenshot:', error);
      }
    } else {
      console.log(`Active window: ${activeWindowName?.owner.name}`);
      console.log(`Waiting for the window "${window}" to become active...`);
    }

    await new Promise((resolve) => setTimeout(resolve, interval));
  }
}
