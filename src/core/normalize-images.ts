import fs from 'node:fs';
import path from 'node:path';

import sharp from 'sharp';

export type NormalizePayload = {
  input: string;
  output: string;
  width: number;
  height: number;
};

export const normalizeImages = async (
  payload: NormalizePayload
): Promise<void> => {
  const { input, output, width, height } = payload;

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  const files = fs.readdirSync(input);

  for (const file of files) {
    const filePath = path.join(input, file);
    const outputFilePath = path.join(output, file);

    await sharp(filePath)
      .resize(width, height)
      .normalise()
      .toFile(outputFilePath);
  }
};
