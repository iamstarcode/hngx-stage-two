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
  name: string;
}
export type PersonCreationParams = Pick<Person, 'name'>;

import { prisma } from '../db/postgres';

@Route('api')
export class UserController extends Controller {
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
      return { message: 'User not found' };
    } else {
      return user;
    }
  }

  @Put('{userId}')
  async updateUser(
    @Path() userId: number,
    @Body() requestBody: PersonCreationParams
  ) {
    let user;
    try {
      user = await prisma.person.update({
        where: {
          user_id: userId,
        },
        data: {
          ...requestBody,
        },
      });

      this.setStatus(201);
    } catch (error: any) {
      if (error.code == 'P2025') {
        this.setStatus(404);
        return {
          message: `user_id ${userId} does not exit`,
        };
      }
    }

    prisma.$disconnect();

    return user;
  }

  @Delete('{userId}')
  async deleteUser(@Path() userId: number) {
    try {
      await prisma.person.delete({
        where: {
          user_id: userId,
        },
      });

      this.setStatus(200);
    } catch (error: any) {
      console.log(error);
      if (error.code == 'P2025') {
        this.setStatus(404);
        return {
          message: `user_id ${userId} does not exit`,
        };
      }
    }

    this.setStatus(204);
    prisma.$disconnect();
  }
}
