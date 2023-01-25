require("dotenv").config()

var mysql = require('mysql');
console.log(process.env.user)
console.log(process.env.password)

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: process.env.user,
            password: process.env.password,
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect