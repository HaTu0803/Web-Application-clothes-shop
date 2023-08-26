import sql from 'mssql'

var config = {
  server: "localhost",
  port: 1433, // Make sure to escape backslashes in the server name
  database: "shopping_website", // Corrected "databse" to "database"
  user: 'sa',
  password: "123",
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
  connectionTimeout: 150000,
  pool:
    { max: 10, min: 0, idleTimeoutMillis: 30000, },

};


export default {
  async NewProducts() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query('SELECT DISTINCT p.ProductID,p.Photo, p.ProductName , pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID where YEAR(p.CreateTime) = YEAR(GETDATE())')
    return result1
  },

  async AllProducts() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query('SELECT DISTINCT p.ProductID,p.ProductName,p.Photo,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
    return result1

  },

  async ProductByID(id) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT top 1 p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,c.ColorName,s.SizeName,pd.Quantity,pd.Price 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID 
                                              INNER JOIN colors c ON c.ColorID = pd.ColorID
                                              INNER JOIN sizes s ON s.SizeID = pd.SizeID
                                              where p.ProductID = '${id}'`)
    return result1

  },

  async ProductByCategoryName(type) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT DISTINCT p.ProductID,p.ProductName,p.Photo,pd.Price 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID 
                                              INNER JOIN categories c ON p.CategoryID = c.CategoryID 
                                              where c.CategoryName =  N'${type}'`)
    return result1
  },

  async ProductByCategory(type) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT DISTINCT p.ProductID,p.ProductName,p.Photo,pd.Price 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID 
                                              INNER JOIN categories c ON p.CategoryID = c.CategoryID 
                                              where c.CategoryName LIKE N'${type}%'`)
    return result1
  },

  async ProductByTags() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT DISTINCT p.ProductID,p.ProductName,p.Photo,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID INNER JOIN producttags pt ON p.ProductID = pt.ProductID INNER JOIN tags t ON pt.TagID = t.TagID`)
    return result1
  },


  async ProductByTagName(type) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT DISTINCT p.ProductID,p.ProductName,p.Photo,pd.Price 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID
                                              INNER JOIN producttags pt ON p.ProductID = pt.ProductID
                                              INNER JOIN tags t ON pt.TagID = t.TagID
                                              where t.TagName = N'${type}'`)
    return result1
  },

}