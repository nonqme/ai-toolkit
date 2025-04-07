#!/usr/bin/env node
import sade from 'sade';

import record, { type RecordOptions } from '../core/commands/record.js';

const program = sade('screenset');

program
  .version('0.0.1')
  .describe('A CLI tool to create / manage screenshot datasets');

program
  .command('record')
  .describe('Record a screenshot dataset')
  .option('--name, -n', 'Name of the dataset')
  .option('--fps, -f', 'Capture frequency in frames per second')
  .option('--window, -w', 'Window name to capture')
  .option('--output, -o', 'Output directory for the dataset')
  .action((options) => {
    const { name, fps, window, output } = options as RecordOptions;

    record({ name, fps, window, output });
  });

program.parse(process.argv);
