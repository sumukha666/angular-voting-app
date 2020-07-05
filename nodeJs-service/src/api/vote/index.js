const express = require("express");
let router = express.Router();
const controller = require("./controller");

router.get("/",controller.getVotes);
router.get("/:id",controller.getVoteDetails);
router.post("/",controller.createVote);
// router.put("/:name",controller);
//router.delete("/:id",controller);

module.exports = router;