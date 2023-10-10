import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';

//configure env
dotenv.config();

//database
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoute);

//rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Ecommerce APP</h1>');
});

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `the server is running on ${process.env.DEV_MODE} on port ${PORT}`.bgCyan
      .white
  );
});
