//import { Person, validatePersonData } from '../validations/user-validation';
import {
  Body,
  Controller,
  Route,
  Post,
  Middlewares,
  SuccessResponse,
  Response,
  Get,
  Path,
} from 'tsoa';

interface Person {
  user_id: number;
  age: number;
  name: string;
}
export type PersonCreationParams = Pick<Person, 'age' | 'name'>;

interface ValidateErrorJSON {
  message: 'Validation failed';
  details: { [name: string]: unknown };
}

import { prisma } from '../db/postgres';

/*
import { PersonData } from '../validations/user-validation'; */
/* const CreateUser = async (req: Request, res: Response) => {
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
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    res.status(400).json({ error: 'You supplied an invalid Id' });
  } else {
    const user = await prisma.person.findFirst({
      where: {
        user_id: {
          equals: parseInt(id),
        },
      },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
    prisma.$disconnect();
  }
};
 */

//
@Route('api')
export class UserController extends Controller {
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @SuccessResponse('201', 'Created')
  @Post()
  async createUser(@Body() requestBody: PersonCreationParams): Promise<Person> {
    const user = await prisma.person.create({
      data: {
        ...requestBody,
      },
    });

    prisma.$disconnect();
    this.setStatus(201);
    return user;
  }

  @Get('{userId}')
  async getUser(@Path() userId: number) {
    console.log(userId);
  }
}
