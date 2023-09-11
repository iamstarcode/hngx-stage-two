import express from 'express';
//import { validatePersonData } from '../validations/user-validation';
//import UserController from '../controllers/UserController';

const router = express.Router();

//router.post('/', validatePersonData, CreateUser);
//router.get('/:id', GetUser);

router.get('/ping', async (_req, res) => {
  //const controller = new UserController();
  //const response = await controller.getMessage();
  return res.send('vdff');
});

//
export default router;
