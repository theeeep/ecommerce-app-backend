import prisma from 'config/db.config';
import { Request, Response } from 'express';

export const createOrder = async (req: Request, res: Response) => {
  //? Notes: 1. Create a transaction
  //? Notes: 2. List all the cart items and proceed if cart is not empty
  //? Notes: 3. calculate toal amount
  //? Notes: 4. fetch address of user
  //? Notes: 5. to define computed field for formatted address on address module
  //? Notes: 6. we will create a order and order productsorder products
  //? Notes: 7. create events
  //? Notes: 8. Empty the cart

  return await prisma.$transaction(async tx => {
    const cartItems = await tx.cartItem.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        product: true,
      },
    });
    if (cartItems.length == 0) {
      return res.json({ message: 'Cart is empty' });
    }
    const price = cartItems.reduce((prev, current) => {
      return prev + current.quantity * +current.product.price;
    }, 0);
    const address = await tx.address.findFirst({
      where: {
        id: req.user.defaultShippingAddress,
      },
    });
    const order = await tx.order.create({
      data: {
        userId: req.user.id,
        netAmount: price,
        address: String(address?.formattedAddress),
        products: {
          create: cartItems.map(cart => {
            return {
              productId: cart.productId,
              quantity: cart.quantity,
            };
          }),
        },
      },
    });
    const orderEvent = await tx.orderEvent.create({
      data: {
        orderId: order.id,
      },
    });
    await tx.cartItem.deleteMany({
      where: {
        userId: req.user.id,
      },
    });
    return res.json(order);
  });
};
export const listOrders = async (req: Request, res: Response) => {};
export const cancelOrder = async (req: Request, res: Response) => {};
export const getOrderById = async (req: Request, res: Response) => {};
