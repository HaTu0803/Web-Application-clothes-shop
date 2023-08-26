
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
  async AllUsers() {
    let pool = await sql.connect(config)
    let result2 = await pool.request().query('SELECT u.UserID, u.UserName, u.TypeAccount FROM USERS u')
    
    console.log(result2)
    return result2

},

async UserByID(id) {
    let pool = await sql.connect(config)
    let result2 = await pool.request().query(`SELECT * FROM USER where UserID = '${id}'`)
    return result2
},



async createUser(UserName, Pass, TypeAccount, CreateTime, UpdateTime, LockAccount, IsDelete) {
      try {
          let pool = await sql.connect(config);
          let query = `
              INSERT INTO USERS (UserName, Pass, TypeAccount, CreateTime, UpdateTime, LockAccount, IsDelete)
              VALUES (@UserName, @Pass, @TypeAccount, @CreateTime, @UpdateTime, @LockAccount, @IsDelete);
              SELECT SCOPE_IDENTITY() AS UserId;
          `;
          let result = await pool.request()
              .input('UserName', sql.NVarChar, UserName)
              .input('Pass', sql.NVarChar, Pass)
              .input('TypeAccount', sql.NVarChar, TypeAccount)
              .input('CreateTime', sql.DateTime, CreateTime)
              .input('UpdateTime', sql.DateTime, UpdateTime)
              .input('LockAccount', sql.Bit, LockAccount)
              .input('IsDelete', sql.Bit, IsDelete)
              .query(query);
          
          return result;

      } catch (error) {
          throw error;
      }
  },



  
    async updateUser(userID, newUserInfo) {
      try {
        const pool = await sql.connect(config);
        const query = `
          UPDATE USERS
          SET Pass = @Pass, ...
          WHERE UserID = @UserID;
        `;
  
        const result = await pool.request()
          .input('UserID', sql.Int, userID)
          .input('UserName', sql.NVarChar, newUserInfo.UserName)
          .input('Pass', sql.NVarChar, newUserInfo.Pass)
          .input('TypeAccount', sql.NVarChar, newUserInfo.TypeAccount)
          // ... input other fields
          .query(query);
  
        return result;
      } catch (error) {
        throw error;
      }
    },

  

  async deleteUser(UserID) {
    try {
      let pool = await sql.connect(config);
      let query = `
        DELETE FROM USERS
        WHERE UserID = @UserID;
      `;
      let result = await pool.request()
        .input('UserID', sql.Int, UserID)
        .query(query);

      return result;

    } catch (error) {
      throw error;
    }
  }
}



