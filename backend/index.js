// import createError from 'http-errors';

// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
import express from 'express';
import productRoutes from './routes/product-route.js';
import userRoutes from './routes/user-route.js';

var app = express();
app.set('view engine', 'ejs');


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:3001`); // Replace with your frontend's URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// ... (error handling middleware)
app.use('/api/product', productRoutes); 
app.use('/api/user', userRoutes);

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});


