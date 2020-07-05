const express = require("express");
let router = express.Router();
const controller = require("./controller");

router.get("/",controller.getTopics);
// router.post("/",controller.createTopic);
// router.put("/:name",controller.updateTopic);
// router.delete("/:name",controller.deleteTopic);

module.exports = router;