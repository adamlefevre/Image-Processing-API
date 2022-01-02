import { Request, Response, NextFunction } from 'express';

const validateInput = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query = req.query;
  const filename = query.filename as unknown as string;
  const height = query.height as unknown as number;
  const width = query.width as unknown as number;

  if (filename && height && width) {
    //valid input
  } else {
    req.body = 'Please use a valid filename with height and width as numbers.';
  }
  next();
};

export default validateInput;
