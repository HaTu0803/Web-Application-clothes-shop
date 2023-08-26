

import authWithRequiredPermission from "./auth.mdw.js";
import ProductRoute from '../routes/product.route';
import UserRoute from '../routes/user.route';
import OrderRoute from '../routes/order-route.route';

export default function (app) {
  app.get('/', function (req, res) {
    res.render('Dashboard')
  })


  app.use('/products', ProductRoute)
  app.use('/products', OrderRoute)
  app.use('/user', UserRoute)


}