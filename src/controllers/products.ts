import prisma from 'config/db.config';
import { Request, Response } from 'express';

export const createProduct = async (req: Request, res: Response) => {
  // create validator for this request
  const product = await prisma.product.create({
    data: {
      ...req.body,
      tags: req.body.tags.join(','),
    },
  });
  res.json(product);
};
