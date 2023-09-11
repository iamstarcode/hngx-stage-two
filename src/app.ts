import express, { Request, Response } from 'express';

import { prisma } from './db/postgres';
import { CreateUser, GetUser } from './controllers/user-controller';
import { validatePersonData } from './validations/user-validation';
const app = express();

app.use(express.json());

app.post('/api', validatePersonData, CreateUser);
app.get('/api/:id', validatePersonData, GetUser);

app.get('/api/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.person.findFirst({
    where: {
      user_id: {
        equals: parseInt(id),
      },
    },
  });

  prisma.$disconnect();
  res.json(user);
});

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
