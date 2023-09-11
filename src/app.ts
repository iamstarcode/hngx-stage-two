import express, { Request, Response } from 'express';

import { prisma } from './db/postgres';
import { CreateUser, GetUser } from './controllers/user-controller';
import { validatePersonData } from './validations/user-validation';
const app = express();

app.use(express.json());

app.post('/api', validatePersonData, CreateUser);
app.get('/api/:id', GetUser);

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
