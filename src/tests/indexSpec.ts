import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test homepage functionality', () => {
  it('Resolves homepage', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});
