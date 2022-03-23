import User from '../models/UserModel.js';
import Product from '../models/ProductModel.js';
import asyncHandler from 'express-async-handler';

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(400).json({ msg: 'Not found' });
  res.status(200).json(product);
});

export { getProduct, getProducts };
