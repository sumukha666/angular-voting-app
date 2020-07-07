const mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qwerty@123"
  });

try {
    console.log("here")
    db.query("CREATE DATABASE IF NOT EXISTS VotingApp", function (err, result) {
        if (err) throw err;
        console.log("Database initialized");
      });
} catch(err){
    console.log(err);
}

db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qwerty@123",
    database:"VotingApp"
  });

try {
    db.query("CREATE TABLE IF NOT EXISTS User ( userId VARCHAR(255) PRIMARY KEY, userName VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, isAdmin BOOLEAN  NOT NULL)  ENGINE=INNODB;", function (err, result) {
        if (err) throw err;
        console.log("User Table initialized");
      });
} catch(err){
    console.log(err);
}


try {
    let query = `CREATE TABLE IF NOT EXISTS Topic
                    (topicId  INT AUTO_INCREMENT PRIMARY KEY, 
                    creatorName VARCHAR(255),
                    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    statement VARCHAR(255) NOT NULL,
                    category VARCHAR(255) NOT NULL,
                    FOREIGN KEY (creatorName) REFERENCES User(userId))  ENGINE=INNODB;`
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log("Table Topic initialized");
      });
} catch(err){
    console.log(err);
}

try {
    query = `CREATE TABLE IF NOT EXISTS Vote
                    (respId  INT AUTO_INCREMENT PRIMARY KEY, 
                    userName VARCHAR(255),
                    topicId INT,
                    topicResp BOOLEAN  NOT NULL,
                    FOREIGN KEY (userName) REFERENCES User(userId),
                    FOREIGN KEY (topicId) REFERENCES Topic(topicId))  ENGINE=INNODB;`
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log("Table Vote initialized");
      });
} catch(err){
    console.log(err);
}

try {
    query = ` INSERT INTO User (userId, userName, password, isAdmin) VALUES ("admin@pca.com",'admin',"Qwerty@123",true)`;
    db.query(query, function (err, result) {
        if (err){ throw err;}
        console.log("Admin initialized with id:admin@pca.com, password: Qwerty@123");
      });
} catch(err){
    // console.log(err);
    console.log("admin exists with d:admin@pca.com, password: Qwerty@123")
}


