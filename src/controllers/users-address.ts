import prisma from 'config/db.config';
import { NotFoundException } from 'exceptions/not-found';
import { ErrorCodes } from 'exceptions/root';
import { Request, Response } from 'express';
import { AddressSchema } from 'schema/users';

// ? ---> Add Address
export const addAddress = async (req: Request, res: Response) => {
  AddressSchema.parse(req.body);
  const address = await prisma.address.create({
    data: {
      ...req.body,
      userId: req.user.id,
    },
  });
  res.json(address);
};

// ? ---> Update Address
export const updateAddress = async (req: Request, res: Response) => {};

// ? ---> Delete Address
export const deleteAddress = async (req: Request, res: Response) => {
  try {
    await prisma.address.delete({
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).json({ message: 'Address Deleted Successfully' });
  } catch (err) {
    throw new NotFoundException('Address not found!', ErrorCodes.ADDRESS_NOT_FOUND);
  }
};

// ? ---> List Address
export const listAddress = async (req: Request, res: Response) => {
  const addresses = await prisma.address.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.status(200).json(addresses);
};
