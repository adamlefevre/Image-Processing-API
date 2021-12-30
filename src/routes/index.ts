import express from 'express';

const routes = express();

routes.get('/', (req, res) => {
  res.send('Home page.');
});

export default routes;
