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
    async AllCategory() {
        let pool = await sql.connect(config)
        let result1 = await pool.request().query('SELECT * from categories')
        // let result1 = await pool.request().query('SELECT * FROM products')
        return result1
    },
    async AddCategory(category) {
        const pool = await sql.connect(config);
        const sql1 =`INSERT INTO categories (CategoryID, CategoryName)
      VALUES ('${category.categoryID}', '${category.categoryName}');`
      let result1 = await pool.request().query(sql1)
    },
    async GetCategoryByID(id) {
        let pool = await sql.connect(config)
        let result1 = await pool.request().query(`select * from categories where CategoryID = '${id}'`)
        return result1
    },
    async EditCategoryByID(id, category) {
        let pool = await sql.connect(config)
        let result1 = await pool.request().query(`update categories set CategoryName = '${category.categoryName}' where CategoryID = '${id}'`)
        return result1
    },
  }