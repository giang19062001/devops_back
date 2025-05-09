//remote

mysqlConfig = {
   connectionLimit: 100,
   port: 3306,
   charset: "utf8",
   host: process.env.MYSQL_HOST, 
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DB,
};
console.log("mysqlConfig =>", mysqlConfig)

// mySQL pool
let mysql = require("mysql2/promise");
let mysqlPool = mysql.createPool(mysqlConfig);

exports.mysqlPool = mysqlPool;
