import prisma from 'config/db.config';
import { Request, Response } from 'express';

//? ---> Create Product
export const createProduct = async (req: Request, res: Response) => {
  // TODO create validator for this request

  const product = await prisma.product.create({
    data: {
      ...req.body,
      tags: req.body.tags.join(','),
    },
  });
  res.json(product);
};

// //? ---> Update Product
export const updateProduct = async (req: Request, res: Response) => {};

// //? ---> Delete Product
export const deleteProduct = async (req: Request, res: Response) => {};

// //? ---> List Products
export const listProducts = async (req: Request, res: Response) => {};

// //? ---> Get ProductById
export const getProductById = async (req: Request, res: Response) => {};
