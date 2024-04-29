import { User } from '@prisma/client';
import prisma from 'config/db.config';
import { NotFoundException } from 'exceptions/not-found';
import { ErrorCodes } from 'exceptions/root';
import { Request, Response } from 'express';
import { AddressSchema } from 'schema/users';

// ? ---> Add Address
export const addAddress = async (req: Request, res: Response) => {
  AddressSchema.parse(req.body);
  let user: User;
  try {
    user = await prisma.user.findFirstOrThrow({
      where: {
        id: req.body.userId,
      },
    });
  } catch (err) {
    throw new NotFoundException('User not found!', ErrorCodes.USER_NOT_FOUND);
  }

  const address = await prisma.address.create({
    data: {
      ...req.body,
      user: user.id,
    },
  });
  res.json(address);
};

// ? ---> Update Address
export const updateAddress = async (req: Request, res: Response) => {};

// ? ---> Delete Address
export const deleteAddress = async (req: Request, res: Response) => {};

// ? ---> List Address
export const listAddress = async (req: Request, res: Response) => {};
