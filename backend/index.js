// import createError from 'http-errors';

// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product-route.js';
import orderRoutes from './routes/order-route.js';
import userRoutes from './routes/user-route.js';
import OrderDetailRoute from './routes/orderDetail-route.js';
import DashboardRoute from './routes/dashboard-route.js';

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/api', productRoutes); 
app.use('/api', userRoutes); 
app.use('/api', orderRoutes); 
app.use('/api', OrderDetailRoute); 
app.use('api/revenue', DashboardRoute);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ... (error handling middleware)

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});


