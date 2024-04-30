import { Router } from 'express';
import authRoutes from './auth';
import productRoutes from './products';
import userAddressRoutes from './users-address';
import cartRoutes from './cart';

const rootRouter: Router = Router();

rootRouter.use('/auth', authRoutes); //? ---> User Auth Routes
rootRouter.use('/products', productRoutes); //? ---> Products Routes
rootRouter.use('/users', userAddressRoutes); //? ---> Address Routes
rootRouter.use('/carts', cartRoutes); //? ---> Address Routes

export default rootRouter;
