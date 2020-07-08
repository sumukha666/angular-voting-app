const db = require("../../db/db");

const getTopics = async (req, res) => {

    try {
        db.query("SELECT * FROM Topic", function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, topics: [] });
                console.log(err);
            } else {
                res.status(200).json({ success: true, topics: result });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, topics: [] });
    }
}

const createTopic = async (req, res) => {
    const { creatorName, statement, category } = req.body;
    try {

        const query = `INSERT INTO Topic(creatorName, statement, category)
                        VALUES
                        ("${creatorName}","${statement}", "${category}" )`;

        db.query(query, function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, message: "something went wrong, please try again" });
                console.log(err);
            } else {
                return res.status(200).json({ success: true, message: "created topic successfully" });
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "something went wrong, please try again" });
    }
}

const deleteTopic = async (req, res) => {
    const { params: { id } } = req;
    try {
        const query = `DELETE FROM Topic WHERE topicId ="${id}"`
        db.query(query, function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, message: "something went wrong, please try again" });
                console.log(err);
            } else {
                return res.status(200).json({ success: true, message: "Deleted topic successfully" });
            }

        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "something went wrong, please try again" });
    }
}

module.exports = {
    getTopics,
    createTopic,
    deleteTopic,
}