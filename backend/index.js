// import createError from 'http-errors';

// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
import express from 'express';
import productRoutes from './routes/product-route.js';

var app = express();
app.set('view engine', 'ejs');


app.use('/api', productRoutes); 
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


