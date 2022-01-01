import express from 'express';
import { promises as fs } from 'fs';
import resize from './resize';

const convert = express.Router();

convert.get('/convert', (req, res) => {
  res.send('convert landing page');
});

convert.post('/convert', async (req, res) => {
  const testFile = 'assets/full/fjord.jpg';
  const newPath = 'public/thumbnail/fjord.jpg';

  try {
    console.log('convert called');
    const response = fs.rename(testFile, newPath);
    res.end('fjord created!');
  } catch (error) {
    console.log(error);
  }
});

convert.put('/convert', async (req, res) => {
  const filename = 'fjord';
  const height = 200;
  const width = 300;

  try {
    console.log('resize called!');
    resize(filename, height, width);
  } catch (err) {
    console.log(err);
  }
});

export default convert;
