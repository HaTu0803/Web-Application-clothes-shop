
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


        return result2

    },

    async OrderByID(id) {
      let pool = await sql.connect(config)
      let result2 = await pool.request().query(`SELECT * FROM orders where OrderID = '${id}'`)
      return result2

  },


  async AllOrder() {
    let pool = await sql.connect(config)
    let result2 = await pool.request().query(' SELECT U.UserName AS BuyerName, P.ProductName, PD.Price AS ProductPrice, CD.Quantity AS Quantity, SUM(PD.Price * CD.Quantity) AS TotalPrice FROM cartdetails CD INNER JOIN USERS U ON CD.BuyerID = U.UserID INNER JOIN productdetails PD ON CD.ProductID = PD.ProductID INNER JOIN products P ON PD.ProductID = P.ProductID GROUP BY U.UserName,P.ProductName, PD.Price, CD.Quantity;')
    return result2

},
/*DECLARE @BuyerID INT = 1;

SELECT
    U.UserName AS BuyerName,
    P.ProductName,
    PD.Price AS ProductPrice,
    CD.Quantity AS Quantity,
    SUM(PD.Price * CD.Quantity) AS TotalPrice
FROM
    cartdetails CD
INNER JOIN
    USERS U ON CD.BuyerID = U.UserID
INNER JOIN
    productdetails PD ON CD.ProductID = PD.ProductID
INNER JOIN
    products P ON PD.ProductID = P.ProductID
WHERE
    CD.BuyerID = @BuyerID 
GROUP BY
    U.UserName,
    P.ProductName,
    PD.Price,
    CD.Quantity;
*/








}