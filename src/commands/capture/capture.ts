import path from 'node:path';

import { askName, askWindow, askFps, askOutput } from './capture-prompts.js';
import { captureWindow, type OnUpdate } from '../../core/capture.js';

export const capture = async (): Promise<void> => {
  const name = await askName();
  const window = (await askWindow()).toLowerCase();
  const fps = parseInt(await askFps(), 10);
  const output = path.resolve(await askOutput());

  const onUpdate = (update: OnUpdate): void => {
    if (update.window) {
      console.log(`Captured screenshot: ${update.fileName}`);
      console.log(`Screenshot number: ${update.screenshots}`);
    } else {
      console.log(update.message);
      console.log(`Screenshots captured: ${update.screenshots}`);
    }
  };

  await captureWindow({
    name,
    window,
    fps,
    output,
    onUpdate,
  });
};
