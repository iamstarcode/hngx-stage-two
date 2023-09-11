import express from 'express';
//import { validatePersonData } from '../validations/user-validation';
import PingController from '../controllers/UserController';

const router = express.Router();

//router.post('/', validatePersonData, CreateUser);
//router.get('/:id', GetUser);

router.get('/ping', async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

//
export default router;
