import path from 'node:path';

import {
  askInput,
  askOutput,
  askWidth,
  askHeight,
} from './normalize-prompts.js';
import { normalizeImages } from '../../core/normalize-images.js';

export const normalize = async (): Promise<void> => {
  const input = path.resolve(await askInput());
  const output = path.resolve(await askOutput());
  const width = parseInt(await askWidth(), 10);
  const height = parseInt(await askHeight(), 10);

  await normalizeImages({
    input,
    output,
    width,
    height,
  });
};
