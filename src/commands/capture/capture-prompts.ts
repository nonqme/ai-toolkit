import { input } from '@inquirer/prompts';
import {
  isCaptureNameValid,
  isCaptureWindowValid,
  isCaptureFpsValid,
  isCaptureOutputValid,
} from './capture-validations.js';

export const askName = async (): Promise<string> => {
  return input({
    message: 'Enter the name of the set',
    validate: isCaptureNameValid,
  });
};

export const askWindow = async (): Promise<string> => {
  return input({
    message: 'Enter the name of the window to capture',
    validate: isCaptureWindowValid,
  });
};

export const askFps = async (): Promise<string> => {
  return input({
    message: 'Enter the FPS (frames per second)',
    validate: isCaptureFpsValid,
  });
};

export const askOutput = async (): Promise<string> => {
  return input({
    message: 'Enter the output directory for the captured images',
    validate: isCaptureOutputValid,
  });
};
