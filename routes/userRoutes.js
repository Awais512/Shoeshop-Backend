import express from 'express';
import { login, register, profile } from '../controllers/userController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', protect, profile);

export default router;
