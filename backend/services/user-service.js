import sql from 'mssql'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

var config = {
    user: 'sa',
    password: '123',
    server: 'localhost', 
    database: 'shopping_website',
    options: {
      encrypt: true, // Use SSL encryption
      trustServerCertificate: true, // Trust self-signed certificates
    },
};

const SALT_LENGTH = 10;

export default {
    async Register(user) {
        const UserName = "dutus" // user.UserName
        const TypeAccount = "user" // user.TypeAccount
        const Pass = "24042002" // user.Pass
        const pool = await sql.connect(config);
        let result = await pool.request().query(`SELECT COUNT(*) as checkUser FROM USERS WHERE UserName = '${UserName}'`)
        if (result.recordset[0].checkUser != 0) {
            return {
                "error": "UserName already exist"
            }
        }
        const salt = bcrypt.genSaltSync(SALT_LENGTH);
        const hash = bcrypt.hashSync(Pass, salt);

        result = await pool.request().query(`SELECT COUNT(*) as countUser FROM USERS`)
        const UserID = result.recordset[0].countUser + 1;

        const currentDate = new Date();

        // Format the current date and time as a string in SQL-compatible format
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');

        result = await pool.request().query(`INSERT USERS VALUES (${UserID}, '${UserName}', '${hash}', '${TypeAccount}', '${formattedDate}', '${formattedDate}', 0, 0)`)
    },

    async Login(user) {
        const UserName = "dutus" // user.UserName
        const Password = "24042002" // user.Pass
        const pool = await sql.connect(config);
        let result = await pool.request().query(`SELECT UserID, Pass, TypeAccount FROM USERS WHERE UserName = '${UserName}'`)
        if (result.recordset[0].Pass == "") {
            return {
                "error": "UserName does not exist"
            }
        }

        const ret = bcrypt.compareSync(Password, result.recordset[0].Pass);
        if (!ret) {
            return {
                "error": "Password not match"
            }
        }

        const payload = {
            UserID: result.recordset[0].UserID,
            UserName: UserName,
            TypeAccount: result.recordset[0].TypeAccount
        };

        const secretKey = 'thanhtu';

        const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });

        return {
            "Bearer Token": token
        }
    },

    //--------------------------------------------
    async AllUsers() {
        let pool = await sql.connect(config)
        let result2 = await pool.request().query('SELECT u.UserID, u.Pass, u.Name, u.Address, u.Email, u.UserName, u.TypeAccount FROM USERS u')
        
        console.log(result2)
        return result2
    
    },
    
    async UserByID(id) {
        let pool = await sql.connect(config)
        let result2 = await pool.request().query(`SELECT * FROM USERS where UserID = '${id}'`)
        return result2
    },
    
    
    
    async createUser(UserID, Name, UserName, Pass, TypeAccount, Address, Email) {
          try {
              let pool = await sql.connect(config);
              let query = `
                  INSERT INTO USERS (UserID, Name, UserName, Pass, TypeAccount, Address, Email, CreateTime, UpdateTime, LockAccount, IsDelete)
                  VALUES (@UserID,@Name, @UserName, @Pass, @TypeAccount,@Address, @Email, GETDATE(), GETDATE(), 1, 0);
              `;
              let result = await pool.request()
                  .input('UserID', sql.Int, UserID)
                  .input('Name', sql.NVarChar, Name)
                  .input('UserName', sql.NVarChar, UserName)
                  .input('Pass', sql.VarChar, Pass)
                  .input('TypeAccount', sql.NVarChar, TypeAccount)
                  .input('Address', sql.NVarChar, Address)
                  .input('Email', sql.VarChar, Email)
                  .query(query);
              
              return result;
    
          } catch (error) {
              throw error;
          }
      },
    
    
    
      
        async updateUser(UserID, newUserInfo) {
          try {
            const pool = await sql.connect(config);
            const query = `
              UPDATE USERS
              SET Pass = @Pass, Name = @Name, TypeAccount = @TypeAccount, Email = @Email, Address = @Address
              WHERE UserID = @UserID;
            `;
      
            const result = await pool.request()
              .input('UserID', sql.Int, UserID)
              .input('Name', sql.NVarChar, newUserInfo.Name)
              .input('Pass', sql.NVarChar, newUserInfo.Pass)
              .input('TypeAccount', sql.NVarChar, newUserInfo.TypeAccount)
              .input('Email', sql.NVarChar, newUserInfo.Email)
              .input('Address', sql.NVarChar, newUserInfo.Address)
              .query(query);
      
            return result;
          } catch (error) {
            throw error;
          }
        },
    
      
    
      async deleteUser(UserID) {
        try {
          const pool = await sql.connect(config);
          const query ='DELETE FROM paymentmethods WHERE UserID = @UserID; DELETE FROM USERS WHERE UserID = @UserID;' ;
          const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .query(query);
    
          return result;
    
        } catch (error) {
          throw error;
        }
      }
}