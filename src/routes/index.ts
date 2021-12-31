import express from 'express';
import convert from './convert';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Home page.');
});

routes.get('/convert', convert);

export default routes;
