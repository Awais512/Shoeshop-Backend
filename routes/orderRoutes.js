import express from 'express';
import { admin, protect } from '../Middleware/AuthMiddleware.js';

import {
  createOrder,
  deliverOrder,
  getAllOrders,
  getOrder,
  myOrders,
  payOrder,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post('/', protect, createOrder);

// ADMIN GET ALL ORDERS
orderRouter.get('/all', protect, admin, getAllOrders);
// USER LOGIN ORDERS
orderRouter.get('/', protect, myOrders);

// GET ORDER BY ID
orderRouter.get('/:id', protect, getOrder);

// ORDER IS PAID
orderRouter.put('/:id/pay', protect, payOrder);

// ORDER IS PAID
orderRouter.put('/:id/delivered', protect, deliverOrder);

export default orderRouter;
