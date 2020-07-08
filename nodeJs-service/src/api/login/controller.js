const db = require("../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userLogin = async (req, res) => {
    const { userId, password } = req.body;
    try {
        db.query(`SELECT * FROM User WHERE userId='${userId}'`, function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, message: "failed to login", err });
            } else {
                bcrypt.compare(password, result[0].password, (err, resp) => {
                    if (err) {
                        console.log(err);
                        res.status(401).json({ success: false, message: "User not authorized", err });
                    }
                    if (resp) {
                        console.log(resp);
                        const token = jwt.sign({
                            userId: result[0].userId,
                            isAdmin: result[0].isAdmin
                        }, "secret", {
                            expiresIn: "2d"
                        })
                        res.status(200).json({ success: true, message: "User login success", token });
                    }
                })

            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "failed to login", err });
    }
}

module.exports = {
    userLogin,
};