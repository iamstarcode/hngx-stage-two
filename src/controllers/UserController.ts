import {
  Body,
  Controller,
  Route,
  Post,
  SuccessResponse,
  Get,
  Path,
  Put,
  Delete,
} from 'tsoa';

interface Person {
  user_id: number;
  age: number;
  name: string;
}
export type PersonCreationParams = Pick<Person, 'age' | 'name'>;

import { prisma } from '../db/postgres';

@Route('api')
export class UserController extends Controller {
  @SuccessResponse('201', 'Created')
  @Post()
  async createUser(
    @Body() requestBody: PersonCreationParams
  ): Promise<{ user: Person; message: string }> {
    const user = await prisma.person.create({
      data: {
        ...requestBody,
      },
    });

    prisma.$disconnect();
    this.setStatus(201);
    return {
      message: 'Person Created',
      user,
    };
  }

  @Get('{userId}')
  async getUser(@Path() userId: number) {
    const user = await prisma.person.findFirst({
      where: {
        user_id: {
          equals: userId,
        },
      },
    });

    prisma.$disconnect();
    if (!user) {
      this.setStatus(404);
      return { message: 'Person not found' };
    } else {
      return user;
    }
  }

  @Put('{userId}')
  async updateUser(
    @Path() userId: number,
    @Body() requestBody: PersonCreationParams
  ) {
    const user = await prisma.person.update({
      where: {
        user_id: userId,
      },
      data: {
        ...requestBody,
      },
    });

    prisma.$disconnect();

    this.setStatus(201);

    return {
      message: 'User updated',
      user,
    };
  }

  @Delete('{userId}')
  async deleteUser(@Path() userId: number) {
    try {
      const user = await prisma.person.delete({
        where: {
          user_id: userId,
        },
      });

      return {
        message: 'User deleted',
        user,
      };
    } catch (error: any) {
      console.log(error);
      if (error.code == 'P2025') {
        this.setStatus(404);
        return {
          message: `Person with id ${userId} does not exit`,
        };
      }
    }

    this.setStatus(204);
    prisma.$disconnect();
  }
}
