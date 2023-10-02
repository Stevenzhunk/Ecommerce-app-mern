import express from 'express';
import { registerController } from '../controllers/authController.js';

//router Obj
const router = express.Router();

//Routing
//Register || Method post
router.post('/register', registerController);

export default router;
