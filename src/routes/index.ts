import { Router } from 'express';
import authRoutes from './auth';
import productRoutes from './products';
import userAddressRoutes from './users-address';

const rootRouter: Router = Router();

rootRouter.use('/auth', authRoutes); //? ---> User Auth Routes
rootRouter.use('/products', productRoutes); //? ---> Products Routes
rootRouter.use('/users', userAddressRoutes); //? ---> Address Routes

export default rootRouter;
