import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test resizePhoto functionality', () => {
  it('should return 403 if parameters are missing', async () => {
    const response = await request.get('/resizePhoto?filename=fjord');
    console.log(response);
    expect(response.status).toBe(403);
  });
  //it('resolves')
});
