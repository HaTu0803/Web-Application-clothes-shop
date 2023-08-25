
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
//   async AllProducts() {
//     let pool = await sql.connect(config)
//     let result1 = await pool.request().query('SELECT p.ProductID,p.ProductName,p.Descrip,p.Photo,p.CategoryID,p.SellerID,pd.SizeID,pd.ColorID,pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
//     // let result1 = await pool.request().query('SELECT * FROM products')
//     console.log(result1)
//     return result1

// },

// async ProductByID(id) {
//   let pool = await sql.connect(config)
//   let result1 = await pool.request().query(`select * from products where ProductID = '${id}'`)
//   return result1

// },

//-------------------------------EDIT PRODUCT--------------------------

// async UpdateByID(id, updatedData) {
//   let pool = await sql.connect(config)
//   let result1 = await pool.request()
//   .input('id', sql.VarChar, id)
//   .input('ProductName', sql.NVarChar, updatedData.ProductName)
//   .input('Descrip', sql.NVarChar, updatedData.Descrip)
//   .input('Photo', sql.NVarChar, updatedData.Photo)
//   .input('CategoryID', sql.VarChar, updatedData.CategoryID)
//   .input('SellerID', sql.Int, updatedData.SellerID)
//   // .input('ProductName', sql.VarChar, id)
//   .input('sizeID', sql.VarChar, updatedData.SizeID)
//       .input('colorID', sql.VarChar, updatedData.ColorID)
//       .input('quantity', sql.Int, updatedData.Quantity)
//       .input('price', sql.Int, updatedData.Price)
//   .query(`UPDATE products
//   SET ProductName = @ProductName, Descrip = @Descrip, Photo = @Photo,
//       CategoryID = @CategoryID, SellerID = @SellerID
//   WHERE ProductID = @id`)
//   return result1

// },
async UpdateByID(id,updatedData){
    let pool = await sql.connect(config)
    const query = `
    UPDATE Products
    SET
      ProductName = @ProductName,
      Descrip = @Descrip,
      Photo = @Photo,
      CategoryID = @CategoryID,
      SellerID = @SellerID,
      SizeID = @SizeID,
      ColorID = @ColorID,
      Quantity = @Quantity,
      Price = @Price
    WHERE ProductID = @id;
  `;

  const result = await pool.request()
      .input('id', sql.VarChar, id)
  .input('ProductName', sql.NVarChar, updatedData.ProductName)
  .input('Descrip', sql.NVarChar, updatedData.Descrip)
  .input('Photo', sql.NVarChar, updatedData.Photo)
  .input('CategoryID', sql.VarChar, updatedData.CategoryID)
  .input('SellerID', sql.Int, updatedData.SellerID)
  // .input('ProductName', sql.VarChar, id)
    .input('SizeID', sql.VarChar, updatedData.SizeID)
        .input('ColorID', sql.VarChar, updatedData.ColorID)
        .input('Quantity', sql.Int, updatedData.Quantity)
        .input('Price', sql.Int, updatedData.Price)
    .query(query);

  return result;

},
}

