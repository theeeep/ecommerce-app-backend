import { login, signup } from 'controllers/auth';
import { Router } from 'express';

const authRoutes: Router = Router();

authRoutes.post('/signup', signup);
authRoutes.post('/login', login);

export default authRoutes;
