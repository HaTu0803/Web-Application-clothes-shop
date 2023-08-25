
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

  // async  AddProduct(product) {
  //   try {
  //     const pool = await sql.connect(config);
  
  //     const sql1 = `
  //       INSERT INTO products (ProductName, Descrip, Photo, CategoryID, SellerID)
  //       VALUES (?, ?, ?, ?, ?);
  //     `;
  
  //     const sql2 = `
  //       INSERT INTO productdetails (SizeID, ColorID, Quantity, Price)
  //       VALUES (?, ?, ?, ?);
  //     `;
  
  //     const transaction = new sql.Transaction(pool);
  
  //     await transaction.begin();
  
  //     const request1 = new sql.Request(transaction);
  //     request1.input('ProductName', sql.NVarChar, product.ProductName);
  //     request1.input('Descrip', sql.NVarChar, product.Descrip);
  //     request1.input('Photo', sql.NVarChar, product.Photo);
  //     request1.input('CategoryID', sql.VarChar, product.CategoryID);
  //     request1.input('SellerID', sql.Int, product.SellerID);
  //     await request1.query(sql1);
  
  //     const request2 = new sql.Request(transaction);
  //     request2.input('SizeID', sql.VarChar, product.SizeID);
  //     request2.input('ColorID', sql.VarChar, product.ColorID);
  //     request2.input('Quantity', sql.Int, product.Quantity);
  //     request2.input('Price', sql.Int, product.Price);
  //     await request2.query(sql2);
  
  //     await transaction.commit();
      
  //     return "Product added successfully";
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // },

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
// async UpdateByID(id,updatedData){
//     let pool = await sql.connect(config)
//     const query = `
//     UPDATE Products
//     SET
//       ProductName = @ProductName,
//       Descrip = @Descrip,
//       Photo = @Photo,
//       CategoryID = @CategoryID,
//       SellerID = @SellerID,
//       SizeID = @SizeID,
//       ColorID = @ColorID,
//       Quantity = @Quantity,
//       Price = @Price
//     WHERE ProductID = @id;
//   `;

//   const result = await pool.request()
//       .input('id', sql.VarChar, id)
//   .input('ProductName', sql.NVarChar, updatedData.ProductName)
//   .input('Descrip', sql.NVarChar, updatedData.Descrip)
//   .input('Photo', sql.NVarChar, updatedData.Photo)
//   .input('CategoryID', sql.VarChar, updatedData.CategoryID)
//   .input('SellerID', sql.Int, updatedData.SellerID)
//   // .input('ProductName', sql.VarChar, id)
//     .input('SizeID', sql.VarChar, updatedData.SizeID)
//         .input('ColorID', sql.VarChar, updatedData.ColorID)
//         .input('Quantity', sql.Int, updatedData.Quantity)
//         .input('Price', sql.Int, updatedData.Price)
//     .query(query);

//   return result;

// },

async UpdateByID(id){
  let pool = await sql.connect(config)
  let result1 = await pool.request().query(`UPDATE products SET 'ProductName' =?, 'Descrip' =?, 'Photo' =?, 'CategoryID' =? WHERE 'ProductID'='${id}'`)
  return result1
},


}

