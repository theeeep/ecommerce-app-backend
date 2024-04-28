import prisma from 'config/db.config';
import { NextFunction, Request, Response } from 'express';
import { hashSync, compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from 'config/config';
import { BadRequestsException } from 'exceptions/bad-requests';
import { ErrorCodes } from 'exceptions/root';
import { UnprocessableEntity } from 'exceptions/validation';
import { SignUpSchema } from 'schema/users';
import { NotFoundException } from 'exceptions/not-found';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  SignUpSchema.parse(req.body);
  const { name, email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    new BadRequestsException('User Already Exists!', ErrorCodes.USER_ALREADY_EXISTS);
  }

  user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  res.status(201).json({ message: ` User ${user.name} created`, data: user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });

  if (!user) {
    throw new NotFoundException('User not found!', ErrorCodes.USER_NOT_FOUND);
  }

  if (!compareSync(password, user.password)) {
    throw new BadRequestsException('Incorrect Password!', ErrorCodes.INCORRECT_PASSWORD);
  }

  const token = jwt.sign({ userId: user.id }, config.jwt_secret);

  res.status(201).json({ user: user.name, accesToken: token });
};
