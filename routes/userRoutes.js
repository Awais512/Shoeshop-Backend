import express from 'express';
import { protect, admin } from '../Middleware/AuthMiddleware.js';
import {
  getMe,
  getUsersByAdmin,
  login,
  register,
  updateProfile,
} from '../controllers/userController.js';

const userRouter = express.Router();

// LOGIN
userRouter.post('/login', login);

// REGISTER
userRouter.post('/', register);

// PROFILE
userRouter.get('/profile', protect, getMe);

// UPDATE PROFILE
userRouter.put('/profile', protect, updateProfile);

// GET ALL USER ADMIN
userRouter.get('/', protect, admin, getUsersByAdmin);

export default userRouter;
