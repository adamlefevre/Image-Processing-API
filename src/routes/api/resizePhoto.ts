import { Router } from 'express';
import resizePhoto from '../../controllers/resizePhoto';

const router = Router();

//takes a query and returns a resized photo
router.get('/resizePhoto', resizePhoto);

export default router;
