const db = require("../../db/db");

const getVotes = async (req, res) => {
    try {
        db.query("SELECT * FROM Vote", function (err, result, fields) {
            if (err) {
                res.json({ success: false, votes: [] });
                console.log(err);
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
    console.log(id)
    try {
        db.query(`SELECT * FROM Vote WHERE topicId=${id}`, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.json({ success: false, votes: [] });
            } else {
                res.status(200).json({ success: true, votes: result });
            }
        });

    } catch (err) {
        console.log(err)
        res.json({ success: false, votes: [] });
    }
}


const createVote = async (req, res) => {
    const { topicId, topicResp } = req.body;
    const {userId} = req.userInfo;
    let qur= ` SELECT * FROM Vote WHERE userName='${userId}' and topicId='${topicId}'`
    let query;
    try {
        db.query(qur,(err,result)=>{
            if(err){
                console.log(err);
            }
            if(result.length>0){
                query = `UPDATE Vote SET topicResp = ${topicResp} WHERE  userName='${userId}' and topicId='${topicId}'`
            }else {
                query = `INSERT INTO Vote(userName, topicId, topicResp)
                        VALUES
                        ("${userId}","${topicId}", ${topicResp} )`;
            }

            db.query(query, function (err, result, fields) {
                if (err) {
                    res.status(500).json({ success: false, message: "something went wrong, please try again" });
                    console.log(err);
                } else {
                    return res.status(200).json({ success: true, message: "response saved successfully" });
                }
    
            });
        })

        

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
