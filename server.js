import express from 'express';
import products from './data/products.js';
import connectDb from './config/db.js';
import dotenv from 'dotenv';

//Route files import
import productRoutes from './routes/productRoutes.js';
import ImportData from './DataImport.js';

dotenv.config();
//Initialize express app
const app = express();

//Connecting to Db
connectDb();

//Import data api
app.use('/api/import', ImportData);

//Get all Products
app.use('/api/products', productRoutes);

const port = process.env.PORT;

//Server code
app.listen(port, () => console.log(`Server is running on port: ${port}`));
