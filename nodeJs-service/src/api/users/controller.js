const db = require("../../db/db");

const getUsers = async (req, res) => {
    try {
        db.query("SELECT * FROM User", function (err, result, fields) {
            if (err) {
                res.json({ success: false, users: [] });
                throw err;
            } else {
                res.status(200).json({ success: true, users: result });
            }
        });

    } catch (err) {
        console.log(err)
        res.json({ success: false, users: [] });
    }
}



const createUser = async (req, res) => {
    const { userId, userName, password, isAdmin } = req.body;
    try {
        console.log(userId, userName, password, isAdmin)
        const query = `INSERT INTO User(userId, userName, password, isAdmin)
                        VALUES
                        ("${userId}","${userName}", "${password}", ${isAdmin} )`;

        db.query(query, function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, message: "something went wrong, please try again" });
                throw err;
            } else {
                return res.status(200).json({ success: true, message: `created User ${userName} successfully` });
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "something went wrong, please try again" });
    }
}


module.exports = {
    getUsers,
    createUser,
}