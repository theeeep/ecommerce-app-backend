import { createProduct } from 'controllers/products';
import { errorHandler } from 'error-handler';
import { Router } from 'express';
import adminMiddleware from 'middlewares/admin';
import authMiddleware from 'middlewares/auth';

const productRoutes: Router = Router();

productRoutes.post('/', [authMiddleware, adminMiddleware], errorHandler(createProduct));

export default productRoutes;
