const mysql = require('mysql')

const mysqlConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database: "contacts"
})

mysqlConnect.connect( (err) => {
    if(err) {
        console.error(err)
        return
    } else {
        console.log("DB conectada")
    }
} )

module.exports = mysqlConnect