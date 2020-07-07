const db = require("../../db/db");

const getVotes = async (req, res) => {
    try {
        db.query("SELECT * FROM Vote", function (err, result, fields) {
            if (err) {
                res.json({ success: false, votes: [] });
                throw err;
            } else {
                res.status(200).json({ success: true, votes: result }); 
            }
        });

    } catch (err) {
        console.log(err)
        res.json({ success: false, votes: [] });
    }
}

const getVoteDetails = async (req, res) => {
    const { params: { id } } = req;
    try {
        db.query(`SELECT * FROM Vote WHERE respId=${id}`, function (err, result, fields) {
            if (err) {
                throw err;
            } else {
                res.json({ success: false, votes: [] });
                res.status(200).json({ success: true, votes: result });
            }
        });

    } catch (err) {
        console.log(err)
        res.json({ success: false, votes: [] });
    }
}


const createVote = async (req, res) => {
    const { userName, topicId, topicResp } = req.body;
    try {

        const query = `INSERT INTO Vote(userName, topicId, topicResp)
                        VALUES
                        ("${userName}","${topicId}", ${topicResp} )`;

        db.query(query, function (err, result, fields) {
            if (err) {
                res.status(500).json({ success: false, message: "something went wrong, please try again" });
                throw err;
            } else {
                return res.status(200).json({ success: true, message: "response saved successfully" });
            }

        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "something went wrong, please try again" });
    }
}

module.exports = {
    getVotes,
    createVote,
    getVoteDetails,
}