import supertest from 'supertest';
import app from '../index';
import { readFileSync, promises as fs } from 'fs';
import sharp from 'sharp';
import resize from '../routes/api/resize';

const request = supertest(app);

describe('Test convert functionality', () => {
  it('Resolves convert', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Moves file to local storage', async () => {
    await request.post('/convert');
    const jpgToBeProcessed = readFileSync('public/thumbnail/fjord.jpg');
    expect(jpgToBeProcessed).not.toBeFalsy();
  });

  it('Resizes image', async () => {
    await request.put('/convert');
    const jpgToBeProcessed = 'assets/fjord.jpg';
    const testFile = sharp('public/thumbnail/fjord.jpg');
    const thumb = resize(jpgToBeProcessed, 200, 300);
  });
});
