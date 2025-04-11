import { input } from '@inquirer/prompts';

import { inputTransformer, inputTheme } from './config.js';
import {
  validateName,
  validateWindowName,
  validateFps,
  validateOutput,
} from './validation.js';

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

export const askForFps = async () => {
  return input({
    message: 'What is the number of screenshots per second?',
    required: true,
    transformer: inputTransformer,
    validate: (value: string) => {
      return validateFps(parseInt(value));
    },
    theme: inputTheme,
  });
};

export const askForOutput = async () => {
  return input({
    message: 'What is the output directory for the captured images?',
    required: true,
    transformer: inputTransformer,
    validate: validateOutput,
    theme: inputTheme,
  });
};
