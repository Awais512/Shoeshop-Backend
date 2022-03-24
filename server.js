import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';

//Route files import
import productRoutes from './routes/productRoutes.js';
import ImportData from './DataImport.js';
import errorHandler from './Middlewares/Error.js';

dotenv.config();
//Initialize express app
const app = express();

//Connecting to Db
connectDb();

//Import data api
app.use('/api/import', ImportData);
app.use('/api/products', productRoutes);
// app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;

//Server code
app.listen(port, () => console.log(`Server is running on port: ${port}`));
