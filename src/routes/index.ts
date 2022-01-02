import resizePhoto from '../controllers/resizePhoto';
import { Router, Request, Response } from 'express';

const routers = Router();

routers.get('/', (req: Request, res: Response) => {
  res.send('Home page');
});

routers.get('/resizePhoto', resizePhoto);

export default routers;
