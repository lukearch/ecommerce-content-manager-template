import { AlchemyApplication } from '@alchemyjs/core';
import * as request from 'supertest';

describe('Hello', () => {
  let app: AlchemyApplication;

  beforeEach(async () => {
    app = await AlchemyApplication.create();
    await app.start();
  });

  describe('GET /hello', () => {
    it('should return 200', async () => {
      return request(app.server)
        .get('/hello')
        .expect(200)
        .expect('Hello from Alchemy! 🧪🔮🚀');
    });
  });
});
