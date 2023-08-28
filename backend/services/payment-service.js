import sql from 'mssql'

var config = {
  server: "localhost",
  port: 1433, // Make sure to escape backslashes in the server name
  database: "shopping_website", // Corrected "databse" to "database"
  user: 'sa',
  password: "123456aA@$",
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
  connectionTimeout: 150000,
  pool:
    { max: 10, min: 0, idleTimeoutMillis: 30000, },
};

export default {
  // async PayToCash(AccountBalance) {
  //   // let pool = await sql.connect(config)
  //   // let result1 = await pool.request().query(`select * from bankaccounts where AccountBalance = ${AccountBalance}`)
  //   // return result1
  //   console.log("ok2")

  // },

  async checkPassword(pwd,email){
    // let pool = await sql.connect(config)
    // let result1 = await pool.request().query(`select u.pass from USERS u, bankaccounts b where u.pass = ${pass} and BankAccountNumber = ${BankAccountNumber}`  )
    console.log("ok1")
    // return result1
    }
   
}
