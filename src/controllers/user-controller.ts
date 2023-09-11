import { Request, Response } from 'express';

import { prisma } from '../db/postgres';
import { PersonData } from '../validations/user-validation';

const CreateUser = async (req: Request, res: Response) => {
  const validatedData: PersonData = res.locals.validatedData.data;
  if (validatedData) {
    const user = await prisma.person.create({
      data: {
        ...validatedData,
      },
    });
    res.json(user);
    prisma.$disconnect();
  }
};

const GetUser = async (req: Request, res: Response) => {
  const validatedData: PersonData = res.locals.validatedData.data;

  const { id } = req.params;

  if (validatedData) {
    const user = await prisma.person.findFirst({
      where: {
        user_id: {
          equals: parseInt(id),
        },
      },
    });

    prisma.$disconnect();
    res.json(user);
  }
};
export { CreateUser, GetUser };
