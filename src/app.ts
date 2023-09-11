import express, { Response as ExResponse, Request as ExRequest } from 'express';

import { RegisterRoutes } from './router/routes';

import swaggerUI from 'swagger-ui-express';

//import UserRoute from './routes/user-router';
const app = express();

app.use(
  '/api/v1/docs',
  swaggerUI.serve,
  async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUI.generateHTML(await import('../swagger.json')));
  }
);
//app.use('/api', UserRoute);

app.use(express.json());

//app.post('/api', validatePersonData, CreateUser);
//app.get('/api/:id', GetUser);

RegisterRoutes(app);

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
