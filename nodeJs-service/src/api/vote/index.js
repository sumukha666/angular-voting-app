const express = require("express");
let router = express.Router();
const controller = require("./controller");
const checkAuth = require("../../middleware/check-auth");

router.get("/",checkAuth, controller.getVotes);
router.get("/:id",checkAuth, controller.getVoteDetails);
router.post("/",checkAuth, controller.createVote);
// router.put("/:name",controller);
//router.delete("/:id",controller);

module.exports = router;