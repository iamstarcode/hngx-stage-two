import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from 'express';

import { RegisterRoutes } from './router/routes';

import * as bodyParser from 'body-parser';

import swaggerUI from 'swagger-ui-express';

const app = express();

app.use('/docs', swaggerUI.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUI.generateHTML(await import('../swagger.json')));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: 'Not Found',
  });
});

app.use(function errorHandler(
  err: any,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err?.status == 400) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
