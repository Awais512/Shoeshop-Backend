import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/errorResponse.js';

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
      createdAt: user.createdAt,
    });
  } else {
    return next(new ErrorResponse('Invalid Email or Password', 400));
  }
});
const register = asyncHandler(async (req, res) => {
  res.send('Register');
});

export { login, register };
