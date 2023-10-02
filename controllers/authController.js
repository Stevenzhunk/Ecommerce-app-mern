import { hashPassword } from '../helpers/hashPasword.js';
import userModel from '../models/userModel.js';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //model error empty field
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ error: 'All field are Required' });
    }
    //check exist
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      res.status(409).send({
        success: true,
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
      message: 'User registered successfully',
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
