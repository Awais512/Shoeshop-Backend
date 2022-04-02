import express from 'express';

import { admin, protect } from './../Middleware/AuthMiddleware.js';
import {
  createProduct,
  creatProductReview,
  deleteProduct,
  getAllProducts,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';

const productRoute = express.Router();

// GET ALL PRODUCT
productRoute.get('/', getProducts);

// ADMIN GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
productRoute.get('/all', protect, admin, getAllProducts);

// GET SINGLE PRODUCT
productRoute.get('/:id', getProduct);

// PRODUCT REVIEW
productRoute.post('/:id/review', protect, creatProductReview);

// DELETE PRODUCT
productRoute.delete('/:id', protect, admin, deleteProduct);

// CREATE PRODUCT
productRoute.post('/', protect, admin, createProduct);

// UPDATE PRODUCT
productRoute.put('/:id', protect, admin, updateProduct);
export default productRoute;
