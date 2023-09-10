import express, { Request, Response } from 'express';

import { prisma } from './db/postgres';
const app = express();

app.use(express.json());

app.post('/api', async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const user = await prisma.person.create({
    data: {
      name,
      age,
    },
  });

  prisma.$disconnect();
  res.json(user);
});

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
