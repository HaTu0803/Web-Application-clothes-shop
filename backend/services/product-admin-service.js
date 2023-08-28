
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
        let result1 = await pool.request().query('SELECT distinct p.ProductID,p.ProductName,p.Photo,p.CategoryID, pd.Quantity,pd.Price FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID')
        // let result1 = await pool.request().query('SELECT * FROM products')
        return result1
    },

    async ProductByID(id) {
      let pool = await sql.connect(config)
      let result1 = await pool.request().query(`SELECT distinct p.ProductID,p.ProductName,p.Photo,p.CategoryID, cate.CategoryName, pd.Quantity,pd.Price, c.ColorName, s.SizeName FROM products p INNER JOIN productdetails pd ON p.ProductID = pd.ProductID JOIN colors c on pd.ColorID = c.ColorID join sizes s on pd.SizeID = s.SizeID join categories cate on p.CategoryID = cate.CategoryID where p.ProductID = '${id}'`)
      return result1
  },

  async ProductDetailByID(id) {
    let pool = await sql.connect(config)
    let result1 = await pool.request().query(`select * from products where ProductID = '${id}'`)
    return result1
},

async GetProductByID(id) {
  let pool = await sql.connect(config)
  let result1 = await pool.request().query(`select * from products where ProductID = '${id}'`)
  return result1
},

async EditProductByID(id, product) {
  let pool = await sql.connect(config)
  let result1 = await pool.request().query(`update products set productName = '${product.productName}', descrip = '${product.descrip}', photo = '${product.photo}' where ProductID = '${id}'`)
  return result1
},

  async  AddProduct(product) {
    try {
      const pool = await sql.connect(config);
  
      const sql1 =`INSERT INTO products (ProductID, ProductName, Descrip, Photo, CategoryID)
      VALUES ('${product.ProductID}', '${product.ProductName}', '${product.Descrip}', '${product.Photo}', '${product.CategoryID}');`

      const sql2 =`INSERT INTO productdetails (ProductID, SizeID, ColorID, Quantity, Price)
      VALUES ('${product.ProductID}', '${product.productDetails.SizeID}', '${product.productDetails.ColorID}', ${product.productDetails.Quantity}, ${product.productDetails.Price});`

      let result1 = await pool.request().query(sql1)

      let result2 = await pool.request().query(sql2)
  

      // let result2 = await pool.request().query(`INSERT INTO productdetails (ProductID, SizeID, ColorID, Quantity, Price)
      // VALUES ('${product.ProductID}', '${product.productDetails.SizeID}', '${product.productDetails.ColorID}', ${product.productDetails.Quantity}, ${product.productDetails.Price});`)
  
      // const transaction = new sql.Transaction(pool);
  
      // await transaction.begin();
  
      // const request1 = new sql.Request(transaction);
      // request1.input('ProductName', sql.NVarChar, product.ProductName);
      // request1.input('Descrip', sql.NVarChar, product.Descrip);
      // request1.input('Photo', sql.NVarChar, product.Photo);
      // request1.input('CategoryID', sql.VarChar, product.CategoryID);
      // request1.input('SellerID', sql.Int, product.SellerID);
      // await request1.query(sql1);
  
      // const request2 = new sql.Request(transaction);
      // request2.input('SizeID', sql.VarChar, product.productDetails.SizeID);
      // request2.input('ColorID', sql.VarChar, product.productDetails.ColorID);
      // request2.input('Quantity', sql.Int, product.productDetails.Quantity);
      // request2.input('Price', sql.Int, product.Price);
      // await request2.query(sql2);
  
      // await transaction.commit();
      
      return "Product added successfully";
    } catch (error) {
      console.error(error);
      throw error;
    }
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

//----------------------------------------------------
async AllCategory() {
  let pool = await sql.connect(config)
  let result1 = await pool.request().query('SELECT * FROM categories')
  // let result1 = await pool.request().query('SELECT * FROM products')
  return result1

},

}

