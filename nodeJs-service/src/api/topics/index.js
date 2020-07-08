const express = require("express");
let router = express.Router();
const controller = require("./controller");
const checkAuth = require("../../middleware/check-auth");

router.get("/",checkAuth, controller.getTopics);
router.post("/",checkAuth, controller.createTopic);
// router.put("/:name",controller.updateTopic);
router.delete("/:id",checkAuth, controller.deleteTopic);

module.exports = router;