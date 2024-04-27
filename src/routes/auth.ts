import { login } from 'controllers/auth';
import { Router } from 'express';

const authRoutes: Router = Router();

authRoutes.get('/login', login);

export default authRoutes;
