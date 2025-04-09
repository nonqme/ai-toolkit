#!/usr/bin/env node
import sade from 'sade';

import captureImage from '../commands/capture-image.js';

const program = sade('ai');

program.version('0.0.1').describe('An AI CLI for various tasks');

program
  .command('capture-image')
  .describe(
    'Capture a set of images from the screen and save them to a directory'
  )
  .option('-n, --name', 'Name of the set')
  .option('-w, --window', 'Window name to capture')
  .action(async (options) => {
    const { name, window } = options;
    await captureImage({
      name,
      window,
    });
  });

program.parse(process.argv);
