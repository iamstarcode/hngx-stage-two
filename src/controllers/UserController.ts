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
  person_id: number;
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

  @Get('{personId}')
  async getUser(@Path() personId: number) {
    const user = await prisma.person.findFirst({
      where: {
        person_id: {
          equals: personId,
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

  @Put('{personId}')
  async updateUser(
    @Path() personId: number,
    @Body() requestBody: PersonCreationParams
  ) {
    let user;
    try {
      user = await prisma.person.update({
        where: {
          person_id: personId,
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
          message: `Person with id ${personId} does not exit`,
        };
      }
    }

    prisma.$disconnect();

    return user;
  }

  @Delete('{personId}')
  async deleteUser(@Path() personId: number) {
    try {
      const user = await prisma.person.delete({
        where: {
          person_id: personId,
        },
      });

      return user;
    } catch (error: any) {
      console.log(error);
      if (error.code == 'P2025') {
        this.setStatus(404);
        return {
          message: `Person with id ${personId} does not exit`,
        };
      }
    }

    this.setStatus(204);
    prisma.$disconnect();
  }
}
