import { addAddress, deleteAddress, listAddress, updateAddress } from 'controllers/users-address';
import { errorHandler } from 'error-handler';
import { Router } from 'express';
import adminMiddleware from 'middlewares/admin';
import authMiddleware from 'middlewares/auth';

const userAddressRoutes: Router = Router();

userAddressRoutes.post('/address', [authMiddleware], errorHandler(addAddress));
userAddressRoutes.put('/address/:id', [authMiddleware], errorHandler(updateAddress));
userAddressRoutes.delete('/address/:id', [authMiddleware], errorHandler(deleteAddress)); // TODO : Implement
userAddressRoutes.get('/address', [authMiddleware], errorHandler(listAddress));

export default userAddressRoutes;
