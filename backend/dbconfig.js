
//   import knexObj from 'knex';
// // import * as dotenv from 'dotenv'
// // dotenv.config()

// export default knexObj({
//   client: 'mssql',
//   connection: {
//     host: '127.0.0.1',
//     port: 1433,
//     user: 'sa',
//     password: '123',
//     database: 'shopping_website'
//   }
// });

const sql = require('mssql')

var config = {
  server: "127.0.0.1\\DESKTOP-2V7JI18\\MAYAO", // Make sure to escape backslashes in the server name
  database: "shopping_website", // Corrected "databse" to "database"
  user: 'sa',
  password: "123456",
  options: {
    trustedconnection: true,
    enableArithAbort : true, 
    instancename :'DESKTOP-2V7JI18\\MAYAO'
  },
};

module.exports = config; 