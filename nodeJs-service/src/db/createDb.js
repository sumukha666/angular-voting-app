const mysql = require('mysql');
const mysqlUSer = "root";
const password = "Qwerty@123";
let db = mysql.createConnection({
    host: "localhost",
    user: mysqlUSer,
    password: password
});

try {
    db.query("CREATE DATABASE IF NOT EXISTS VotingApp", function (err, result) {
        if (err) {
            console.log(err)
        };
        console.log("Database initialized");
        console.log("press Ctrl+C to terminate the process")
    });
} catch (err) {
    console.log(err);
}