#!/usr/bin/env node
import sade from 'sade';

const program = sade('ai');

program.version('0.0.1').describe('An AI CLI for various tasks');

program
  .command('capture')
  .describe(
    'Capture a set of images or a video from the screen and save them to a directory'
  )
  .option('-n, --name', 'Name of the set')
  .option('-w, --window', 'Window name to capture')
  .option('-f, --fps', 'Number of screenshots per second')
  .option('-o, --output', 'Output directory for the captured images')
  .option('-t, --type', 'Type of capture (image or video)')
  .action(async (options) => {
    console.log(options);
  });

program.parse(process.argv);
