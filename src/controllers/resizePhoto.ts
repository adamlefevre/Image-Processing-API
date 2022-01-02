import { Router, Request, Response } from 'express';
import validateInput from '../utilities/validateInput';
import sharp from 'sharp';

const resizePhoto = Router();

resizePhoto.get(
  '/resizePhoto',
  validateInput,
  async (req: Request, res: Response) => {
    if (req.body === 'Error, Input file missing') {
      res.status(403).send(req.body);
    } else {
      const filename = req.query.filename as unknown as string;
      const height = Number(req.query.height as unknown);
      const width = Number(req.query.width as unknown);

      try {
        const pathToFile = `./assets/full/${filename}.jpg`;
        const localFile = `./assets/thumbnail/${filename}_thumbnail.jpg`;
        const image = sharp(pathToFile);
        await image.resize(width, height).toFile(localFile);
        res.sendFile(`${filename}_thumbnail.jpg`, {
          root: 'assets/thumbnail/',
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
);

export default resizePhoto;
