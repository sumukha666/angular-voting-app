const express = require("express");
let router = express.Router();
const controller = require("./controller");

router.post("/",controller.userLogin);

module.exports = router;