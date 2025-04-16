#!/usr/bin/env node
import sade from 'sade';

import { capture, normalize } from '../commands/index.js';

const program = sade('ai');

program.version('0.0.1').describe('An AI CLI for various tasks');

program
  .command('capture')
  .describe(
    'Capture a set of images from the screen and save them to a directory'
  )
  .action(async () => {
    await capture();
  });

program
  .command('normalize')
  .describe('Normalize a set of images')
  .action(async () => {
    await normalize();
  });

program.parse(process.argv);
