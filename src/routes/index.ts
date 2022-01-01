import express from 'express';
import convert from './api/convert';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Home page.');
});

routes.get('/convert', convert);

routes.post('/convert', convert);

routes.put('/convert', convert);

export default routes;
