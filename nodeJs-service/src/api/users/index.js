const express = require("express");
let router = express.Router();
const controller = require("./controller");
const checkAuth = require("../../middleware/check-auth");
router.get("/",checkAuth,controller.getUsers);
router.post("/",checkAuth,controller.createUser);
// router.put("/:name",controller.updateUser);
//router.delete("/:id",controller.deleteUser);

module.exports = router;