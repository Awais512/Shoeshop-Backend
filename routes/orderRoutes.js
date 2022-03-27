import express from 'express';
import {
  createOrder,
  getOrderDetails,
} from '../controllers/orderController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';
const router = express.Router();

router.route('/').post(protect, createOrder);
router.route('/:id').get(protect, getOrderDetails);

export default router;
