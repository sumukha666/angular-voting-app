const mysql = require('mysql');
const mysqlUSer = "root";
const password = "Qwerty@123";
const bcrypt = require("bcrypt");
db = mysql.createConnection({
    host: "localhost",
    user: mysqlUSer,
    password: password,
    database: "VotingApp"
});

try {
    db.query("CREATE TABLE IF NOT EXISTS User ( userId VARCHAR(255) PRIMARY KEY, userName VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, isAdmin BOOLEAN  NOT NULL)  ENGINE=INNODB;", function (err, result) {
        if (err) throw err;
        console.log("User Table initialized");
    });
} catch (err) {
    console.log(err);
}


try {
    let query = `CREATE TABLE IF NOT EXISTS Topic
                    (topicId  INT AUTO_INCREMENT PRIMARY KEY, 
                    creatorName VARCHAR(255),
                    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    statement VARCHAR(255) NOT NULL,
                    category VARCHAR(255) NOT NULL,
                    FOREIGN KEY (creatorName) REFERENCES User(userId)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE)  ENGINE=INNODB;`
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log("Table Topic initialized");
    });
} catch (err) {
    console.log(err);
}

try {
    query = `CREATE TABLE IF NOT EXISTS Vote
                    (respId  INT AUTO_INCREMENT PRIMARY KEY, 
                    userName VARCHAR(255),
                    topicId INT,
                    topicResp BOOLEAN  NOT NULL,
                    FOREIGN KEY (userName) REFERENCES User(userId)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE,
                    FOREIGN KEY (topicId) REFERENCES Topic(topicId)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE)  ENGINE=INNODB;`
    db.query(query, function (err, result) {
        if (err)
            console.log("Table Vote initialized");
    });
} catch (err) {
    console.log(err);
}

try {
    bcrypt.hash("Qwerty@123", 10, (err, hash) => {
        if (err) {
            console.log(err)
           } else {
            query = ` INSERT INTO User (userId, userName, password, isAdmin) VALUES ("admin@pca.com",'admin','${hash}',true)`;
            db.query(query, function (err, result) {
                if (err) { console.log(err)}
                console.log("Admin initialized with id:admin@pca.com, password: Qwerty@123");
                console.log("press Ctrl+C to terminate the process")
            });
        }
    })
    } catch (err) {
        // console.log(err);
        console.log("admin exists with id:admin@pca.com, password: Qwerty@123")
    }


