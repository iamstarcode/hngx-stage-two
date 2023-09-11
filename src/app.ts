import express, { Response as ExResponse, Request as ExRequest } from 'express';

import swaggerUI from 'swagger-ui-express';

import UserRoute from './routes/user-router';
const app = express();

/* const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Persons Api',
      version: '1.0.0',
      description: 'An api for handling Persons CRUD',
    },
    servers: [
      {
        //update to production url
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};

const specs = swaggerJsdoc(options); */

app.use(
  '/api/v1/docs',
  swaggerUI.serve,
  async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUI.generateHTML(await import('../build/swagger.json'))
    );
  }
);
app.use('/api', UserRoute);

app.use(express.json());

//app.post('/api', validatePersonData, CreateUser);
//app.get('/api/:id', GetUser);

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
