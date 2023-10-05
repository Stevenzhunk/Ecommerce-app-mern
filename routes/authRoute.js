import express from 'express';
import {
  loginController,
  registerController,
  testController,
} from '../controllers/authController.js';
import { requireSigIn, isAdmin } from '../middlewares/AuthMiddleware.js';
//router Obj
const router = express.Router();

//Routing
//Register || Method post
router.post('/register', registerController);

//Login || Post
router.post('/login', loginController);

router.get('/test', requireSigIn, isAdmin, testController);

export default router;
