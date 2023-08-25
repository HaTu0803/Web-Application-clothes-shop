import sql from 'mssql'

var config = {
  server: "localhost\\DESKTOP-2V7JI18\\MAYAO",
  port: 1433, // Make sure to escape backslashes in the server name
  database: "shopping_website", // Corrected "databse" to "database"
  user: 'sa',
  password: "123456",
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
    let result1 = await pool.request().query('SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID where YEAR(p.CreateTime) = YEAR(GETDATE())')
    console.log(result1)
    return result1
  },

  async AllProducts() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query('SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
    console.log(result1)
    return result1

  },

  async ProductByID(id) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID where ProductID = '${id}'`)
    return result1

  },

  async ProductByCategoryName(type) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price 
                                                FROM products p 
                                                INNER JOIN productdetails pd ON p.ProductID = pd.ProductID
                                                INNER JOIN categories c ON p.CategoryID = c.CategoryID
                                                where c.CategoryName =  N'${type}'`)
    return result1
  },

  async ProductByTags() {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price, t.TagName 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID
                                              INNER JOIN producttags pt ON p.ProductID = pt.ProductID
                                              INNER JOIN tags t ON pt.TagID = t.TagID
                                              where t.TagName =  N'Office wear' OR
                                                    t.TagName =  N'Vacation wear' OR
                                                    t.TagName =  N'Casual wear' OR
                                                    t.TagName =  N'Party wear'`)
    return result1
  },


  async ProductByTagName(style) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price 
                                              FROM products p 
                                              INNER JOIN productdetails pd ON p.ProductID = pd.ProductID
                                              INNER JOIN producttags pt ON p.ProductID = pt.ProductID
                                              INNER JOIN tags t ON pt.TagID = t.TagID
                                              where t.TagName =  N'${style}'`)
    return result1
  },

}