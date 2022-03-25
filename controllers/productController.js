import User from '../models/UserModel.js';
import Product from '../models/ProductModel.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    return next(new ErrorResponse('Product not found', 404));
  }
});

export { getProduct, getProducts };
