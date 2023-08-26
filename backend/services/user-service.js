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
}