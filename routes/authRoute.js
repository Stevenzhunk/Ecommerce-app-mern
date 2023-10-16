import express from 'express';
import {
  forgorPasswordController,
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

//for test
router.get('/test', requireSigIn, isAdmin, testController);

//forgot passowrd
router.post('/forgot-password', forgorPasswordController);

//protected route auth
router.get('/user-auth', requireSigIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
