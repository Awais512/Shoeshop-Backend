import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';

//Route files import
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ImportData from './DataImport.js';
import errorHandler from './Middlewares/Error.js';

dotenv.config();
const app = express();

//Connecting to Db
connectDb();

//Built in middlewares
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Custom apis middleware
app.use('/api/import', ImportData);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

const port = process.env.PORT;

//Server code
app.listen(port, () => console.log(`Server is running on port: ${port}`));
