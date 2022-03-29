import express from 'express';
import {
  createOrder,
  getLoggedInUserOrders,
  getOrderDetails,
  payOrder,
} from '../controllers/orderController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';
const router = express.Router();

router
  .route('/')
  .post(protect, createOrder)
  .get(protect, getLoggedInUserOrders);
router.route('/:id').get(protect, getOrderDetails);
router.put('/:id/pay', protect, payOrder);

export default router;
