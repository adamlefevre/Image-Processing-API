import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test homepage functionality', () => {
  it('Resolves homepage', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
