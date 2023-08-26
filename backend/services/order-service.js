
// import config from '../dbconfig';
import sql from 'mssql'

var config = {
    server: "localhost",
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
    async AllOrder() {
        let pool = await sql.connect(config)
        let result2 = await pool.request().query('SELECT u.UserName AS BuyerName, o.Statuss, o.CreateTime, o.OrderID, o.TotalPrice, o.BuyerID FROM orders o JOIN users u ON o.BuyerID = u.UserID')


    
   
   

        // let result2 = await pool.request().query('SELECT * FROM USER')

        return result2

    },

    async OrderByID(id) {
      let pool = await sql.connect(config)
      let result2 = await pool.request().query(`Select u.UserName AS BuyerName, o.Statuss, o.CreateTime, o.OrderID, o.TotalPrice, o.BuyerID FROM orders o  where OrderID = '${id}' ON `)
      return result2

  },
  //----------------------------------------------
  async AllOrder() {
    let pool = await sql.connect(config)
    let result2 = await pool.request().query('SELECT u.UserName AS BuyerName, o.Statuss, o.CreateTime, o.OrderID, o.TotalPrice, o.BuyerID FROM orders o JOIN users u ON o.BuyerID = u.UserID')
    
    console.log(result2)
    return result2

},

async OrderByID(id) {
    let pool = await sql.connect(config)
    let result2 = await pool.request().query(`SELECT * FROM orders where OrderID = '${id}'`)
    return result2
},
}