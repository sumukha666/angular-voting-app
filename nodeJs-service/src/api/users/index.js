const express = require("express");
let router = express.Router();
const controller = require("./controller");

router.get("/",controller.getUsers);
router.post("/",controller.createUser);
// router.put("/:name",controller.updateUser);
//router.delete("/:id",controller.deleteUser);

module.exports = router;