import { Router } from 'express';
import authRoutes from './auth';
import productRoutes from './products';
import userAddressRoutes from './users-address';
import cartRoutes from './cart';
import orderRoutes from './orders';
import userRoutes from './user';

const rootRouter: Router = Router();

rootRouter.use('/auth', authRoutes); //? ---> User Auth Routes
rootRouter.use('/products', productRoutes); //? ---> Products Routes
rootRouter.use('/userAddress', userAddressRoutes); //? --->User Address Routes
rootRouter.use('/users', userRoutes); //? --->User Address Routes
rootRouter.use('/carts', cartRoutes); //? ---> Address Routes
rootRouter.use('/orders', orderRoutes); //? ---> Address Routes

export default rootRouter;
