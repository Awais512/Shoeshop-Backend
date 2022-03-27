import express from 'express';
import {
  login,
  register,
  profile,
  updateProfile,
} from '../controllers/userController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', protect, profile);
router.put('/profile', protect, updateProfile);

export default router;
