import { cancelOrder, createOrder, getOrderById, listOrders } from 'controllers/orders';
import { errorHandler } from 'error-handler';
import { Router } from 'express';
import authMiddleware from 'middlewares/auth';

const orderRoutes: Router = Router();

orderRoutes.post('/', [authMiddleware], errorHandler(createOrder));
orderRoutes.get('/', [authMiddleware], errorHandler(listOrders));
orderRoutes.put('/:id/cancel', [authMiddleware], errorHandler(cancelOrder));
orderRoutes.get('/:id', [authMiddleware], errorHandler(getOrderById));

export default orderRoutes;
