import express from 'express';

const convert = express.Router();

convert.get('/convert', (req, res) => {
  res.send('convert page');
});

export default convert;
