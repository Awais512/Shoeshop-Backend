import express from 'express';
import { login, register, profile } from '../controllers/userController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';
const router = express.Router();

router.route('/login').post(login);
router.route('register').post(register);
router.get('/profile', protect, profile);

export default router;
