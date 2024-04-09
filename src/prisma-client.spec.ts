import { prisma } from './prisma-client';

describe('PrismaClient', () => {
  it('should be defined', () => {
    expect(prisma).toBeDefined();
  });
});
