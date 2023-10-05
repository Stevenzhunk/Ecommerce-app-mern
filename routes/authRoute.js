import express from 'express';
import {
  loginController,
  registerController,
  testController,
} from '../controllers/authController.js';
import { requireSigIn } from '../middlewares/AuthMiddleware.js';
//router Obj
const router = express.Router();

//Routing
//Register || Method post
router.post('/register', registerController);

//Login || Post
router.post('/login', loginController);

router.get('/test', requireSigIn, testController);

export default router;
