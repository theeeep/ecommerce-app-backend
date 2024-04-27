import prisma from 'config/db.config';
import { Request, Response } from 'express';
import { hashSync } from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    throw Error('User already exists!');
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
