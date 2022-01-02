import express from 'express';
import routers from './routes/index';

const app = express();
const port = 3000;

app.use(routers);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
