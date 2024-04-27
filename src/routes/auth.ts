import { signup } from 'controllers/auth';
import { Router } from 'express';

const authRoutes: Router = Router();

authRoutes.post('/signup', signup);

export default authRoutes;
