import { input } from '@inquirer/prompts';
import { isLabelInputValid, isLabelOutputValid } from './label-validation.js';

export const askInput = async (): Promise<string> => {
  return input({
    message: 'Enter the input directory for the images to label',
    validate: isLabelInputValid,
  });
};

export const askOutput = async (): Promise<string> => {
  return input({
    message: 'Enter the output directory for the labeled images',
    validate: isLabelOutputValid,
  });
};
