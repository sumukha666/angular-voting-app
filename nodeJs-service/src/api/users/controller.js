const db = require("../../db/db");
const bcrypt = require("bcrypt");
const getUsers = async (req, res) => {
    console.log(req.userInfo)
    try {
        db.query("SELECT * FROM User", function (err, result, fields) {
            if (err) {
                res.json({ success: false, users: [] });
               console.log(err);
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
    const { userId, userName, isAdmin } = req.body;
    let  { password } = req.body;
    try {

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ success: false, message: "something went wrong, please try again",err });
            } else {
                const query = `INSERT INTO User(userId, userName, password, isAdmin)
                        VALUES
                        ("${userId}","${userName}", "${hash}", ${isAdmin} )`;
                    
                console.log(hash)
                db.query(query, function (err, result, fields) {
                    if (err) {
                        res.status(500).json({ success: false, message: "something went wrong, please try again" });
                    } else {
                        return res.status(200).json({ success: true, message: `created User ${userName} successfully` });
                    }
                });
            }
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "something went wrong, please try again" });
    }
}


module.exports = {
    getUsers,
    createUser,
}