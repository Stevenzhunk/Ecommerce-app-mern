import { hashPassword, comparePassword } from '../helpers/hashPasword.js';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

//Register
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //model error empty field
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ message: 'All field are Required' });
    }
    //check exist
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      res.status(409).send({
        success: false,
        message: 'User already exists please login',
      });
    }
    //register user

    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User registered Successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      mensage: 'Error in Registration',
      error,
    });
  }
};

//Login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email not found',
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: 'Password mismatch',
      });
    }
    //token

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60,
    });
    res.status(200).send({
      success: true,
      message: 'Token was successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      mesage: 'Error Login',
      error,
    });
  }
};

export const testController = async (req, res) => {
  res.send('Protected Route');
};
