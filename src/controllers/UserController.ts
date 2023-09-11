import { Body, Controller, Route, Post } from 'tsoa';

//import { PersonCreationParams } from 'src/validations/user-validation';

/* import { prisma } from '../db/postgres';
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
@Route('/api')
export class UserController extends Controller {
  @Post()
  async createUser(@Body() requestBody: any): Promise<any> {
    console.log(requestBody);
    this.setStatus(201); // set return status 201

    return {
      message: 'hello',
    };
  }
}
