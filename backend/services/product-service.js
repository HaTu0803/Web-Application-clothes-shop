
// import config from '../dbconfig';
import sql from 'mssql'

var config = {
    server: "localhost\\SQLEXPRESS",
    port : 1433, // Make sure to escape backslashes in the server name
    database: "shopping_website", // Corrected "databse" to "database"
    user: 'sa',
    password: "123",
    options: {
      enableArithAbort : true, 
      trustServerCertificate: true,
    },
    connectionTimeout: 150000, 
    pool: 
    { max : 10, min : 0, idleTimeoutMillis : 30000, },
    
  };
  

export default {
    async AllProducts() {
        let pool = await sql.connect(config)
        let result1 = await pool.request().query('SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
        // let result1 = await pool.request().query('SELECT * FROM products')

        return result1

    },

    async ProductByID(id) {
      let pool = await sql.connect(config)
      let result1 = await pool.request().query(`select * from products where ProductID = '${id}'`)
      return result1

  },
  //----------------------------------------------
  async AllProducts() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query('SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
    // let result1 = await pool.request().query('SELECT * FROM products')
    console.log(result1)
    return result1

},

async ProductByID(id) {
  let pool = await sql.connect(config)
  let result1 = await pool.request().query(`select * from products where ProductID = '${id}'`)
  return result1

},
}