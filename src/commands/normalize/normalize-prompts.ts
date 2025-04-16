import { input } from '@inquirer/prompts';
import {
  isNormalizeInputValid,
  isNormalizeOutputValid,
  isNormalizeHeightValid,
  isNormalizeWidthValid,
} from './normalize-validations.js';

export const askInput = async (): Promise<string> => {
  return input({
    message: 'Enter the input directory for the images to normalize',
    validate: isNormalizeInputValid,
  });
};

export const askOutput = async (): Promise<string> => {
  return input({
    message: 'Enter the output directory for the normalized images',
    validate: isNormalizeOutputValid,
  });
};

export const askWidth = async (): Promise<string> => {
  return input({
    message: 'Enter the width for the normalized images',
    validate: isNormalizeWidthValid,
  });
};

export const askHeight = async (): Promise<string> => {
  return input({
    message: 'Enter the height for the normalized images',
    validate: isNormalizeHeightValid,
  });
};
