import { AlchemyApplication, Logger } from '@alchemyjs/core';
import { prisma } from './prisma-client';

async function main() {
  const app = await AlchemyApplication.create();

  await prisma.$connect().then(() => {
    Logger.info('Connected to database', 'PrismaClient');
  });

  await app.start();
}

main();
