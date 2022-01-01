import sharp from 'sharp';

const resize = async (f: string, h: number, w: number) => {
  const pathToFile = `./assets/full/${f}.jpg`;
  const image = sharp(pathToFile);
  const resized = await image.resize(w, h);
  resized.toFile(`public/thumbnail/${f}_thumbnail.jpg`);
};

export default resize;
