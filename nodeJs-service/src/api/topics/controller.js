const db = require("../../db/db");

const getTopics =  (req, res) => {
    console.log("here")
    return res.json({ "hi": "hello" });
}

module.exports = {
    getTopics,
}