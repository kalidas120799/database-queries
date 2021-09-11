const mysql = require("mysql")

const sqlconfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
}

const mysqlConnections = mysql.createConnection(sqlconfig)

mysqlConnections.connect((error) => {
    if (error) {
        return console.log(error)
    } else {
        return console.log(`${sqlconfig.database} database Connected`)
    }
})

module.exports = mysqlConnections