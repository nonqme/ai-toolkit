import { askForName, askForWindow } from '../utils/prompts.js';

import { validateName, validateWindowName } from '../utils/validation.js';

export type CaptureOptions = {
  name: string;
  window: string;
};

export default async function captureImage(captureOptions: CaptureOptions) {
  console.clear();
  let { name, window } = captureOptions;

  if (!name) name = await askForName();
  const nameValidation = validateName(name);
  if (nameValidation !== true) {
    console.error(nameValidation);
    return;
  }

  if (!window) window = await askForWindow();
  const windowValidation = validateWindowName(window);
  if (windowValidation !== true) {
    console.error(windowValidation);
    return;
  }

  console.log(`Capturing images for set: ${name}`);
  console.log(`Capturing images from: ${window}`);
}
