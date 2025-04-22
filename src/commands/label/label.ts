import path from 'node:path';
import fs from 'node:fs';

import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';

import { askInput, askOutput } from './label-prompts.js';

export const label = async (): Promise<void> => {
  const input = path.resolve(await askInput());
  const output = path.resolve(await askOutput());

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  const fastify = Fastify();
  const root = path.join(
    import.meta.dirname,
    '..',
    '..',
    'core',
    'label',
    'public'
  );
  console.log(root);

  fastify.register(fastifyStatic, {
    root,
    prefix: '/',
  });

  fastify.register(fastifyStatic, {
    root: input,
    prefix: '/images/',
    decorateReply: false,
  });

  fastify.get('/', (request, reply) => {
    reply.sendFile('index.html');
  });

  fastify.get('/images', (request, reply) => {
    const files = fs.readdirSync(input).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
    });

    reply.send(files);
  });

  await fastify.listen({ port: 3000 });
  console.log('Server listening on http://localhost:3000');
};
