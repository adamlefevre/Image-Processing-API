import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test convert functionality', () => {
  it('Resolves convert page', async (done) => {
    const response = await request.get('/convert');
    expect(response.status).toBe(200);
    done();
  });
});
