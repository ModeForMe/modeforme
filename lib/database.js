var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    database : process.env.MYSQL_DATABASE
});

console.log(process.env.RDS_PORT)

connection.connect(function (err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId)
});

module.exports = connection;
