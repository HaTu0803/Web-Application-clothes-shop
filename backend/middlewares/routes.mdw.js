

import authWithRequiredPermission from "./auth.mdw.js";
import ProductRoute from '../routes/product.route';
export default function (app) {
  app.get('/', function (req, res) {
    res.render('HomeScreen')
  })


  app.use('/newproducts', ProductRoute)


}