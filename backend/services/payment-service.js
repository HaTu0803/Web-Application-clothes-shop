import sql from 'mssql'
import config from '../dbconfig.js'

var pool = await sql.connect(config)

export default {

  // async PayToCash(AccountBalance) {
  //   // let pool = await sql.connect(config)
  //   // let result1 = await pool.request().query(`select * from bankaccounts where AccountBalance = ${AccountBalance}`)
  //   // return result1
  //   console.log("ok2")

  // },

  async checkPassword(pwd, bankAccountNumber) {
    let result = await pool.request().query(`SELECT DISTINCT u.pass, b.BankAccountNumber FROM USERS u, bankaccounts b WHERE u.pass = ${pwd} and b.BankAccountNumber =  ${bankAccountNumber}`)
    return result;
  }, 
  async PaytoCash(user, money) {
    let result = await pool.request().query(`SELECT DISTINCT u.pass, b.AccountBalance FROM bankaccounts b,USERS u  where u.UserName = ${user} and b.AccountBalance =  ${AccountBalance}`)
    return result;
  }

}
