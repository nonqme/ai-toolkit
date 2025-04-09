import { input } from '@inquirer/prompts';

import { inputTransformer, inputTheme } from './config.js';
import { validateName, validateWindowName } from './validation.js';

export const askForName = async () => {
  return input({
    message: 'What is the name of the set?',
    required: true,
    transformer: inputTransformer,
    validate: validateName,
    theme: inputTheme,
  });
};

export const askForWindow = async () => {
  return input({
    message: 'What is the name of the window?',
    required: true,
    transformer: inputTransformer,
    validate: validateWindowName,
    theme: inputTheme,
  });
};
