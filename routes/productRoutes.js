import express from 'express';
import {
  getProduct,
  getProducts,
  createReviews,
} from '../controllers/productController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct);
router.post('/:id/review', protect, createReviews);

export default router;
