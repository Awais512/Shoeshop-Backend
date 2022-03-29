import Order from '../models/OrderModel.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';

const createOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return next(new ErrorResponse('No Order Items', 400));
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

const getOrderDetails = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email '
  );
  if (!order) {
    return next(new ErrorResponse('No Order found', 400));
  }
  res.json(order);
});

//Pay Order
const payOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    return next(new ErrorResponse('No Order found', 400));
  }
});

//Get logged In user's Order
const getLoggedInUserOrders = asyncHandler(async (req, res, next) => {
  const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
  res.json(order);
});

export { createOrder, getOrderDetails, payOrder, getLoggedInUserOrders };
