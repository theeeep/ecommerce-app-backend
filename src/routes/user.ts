import { changeUserRole, getUserById, listUsers } from 'controllers/user';
import { errorHandler } from 'error-handler';
import { Router } from 'express';
import adminMiddleware from 'middlewares/admin';
import authMiddleware from 'middlewares/auth';

const userRoutes: Router = Router();

userRoutes.put('/role/:id', [authMiddleware, adminMiddleware], errorHandler(changeUserRole));
userRoutes.get('/', [authMiddleware, adminMiddleware], errorHandler(listUsers));
userRoutes.get('/:id', [authMiddleware, adminMiddleware], errorHandler(getUserById));

export default userRoutes;
