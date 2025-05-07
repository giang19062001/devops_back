//server current
mysqlConfig = {
    connectionLimit: 100,
    host: "127.0.0.1",
    user: "root",
    password: "giang19062001",
    port: 3306,
    database: "projectdevops",
    charset: "utf8",
};


//remote 
// mysqlConfig = {
//     connectionLimit: 100,
//     host: "3.104.104.119",
//     user: "shuket",
//     password: "123456",
//     port: 3306,
//     database: "devops_testing",
//     charset: "utf8",
// };
// mySQL pool
let mysql = require("mysql2/promise");
let mysqlPool = mysql.createPool(mysqlConfig);

exports.mysqlPool = mysqlPool;
