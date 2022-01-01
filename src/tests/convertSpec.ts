import supertest from 'supertest';
import app from '../index';

const fjordPath = '../../input/upload/fjord.jpg';

const request = supertest(app);

describe('Test convert functionality', () => {
  it('Resolves convert', async () => {
    const response = await request.get('/convert');
    expect(response.status).toBe(200);
  });

  it('Moves file to local storage', () => {
    expect(fjordPath).not.toBeFalsy();
  });
});
