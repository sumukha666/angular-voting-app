const express = require("express");
const app = express();
const morgan = require("morgan");
const topics = require("./api/topics");
const users = require("./api/users");
const votes = require("./api/vote");
const bodyparser = require("body-parser");
app.use(express.static("public"));
app.set("view engine","ejs");
const cors = require("cors");
app.use(morgan("dev"));
app.use(cors());
app.use(bodyparser.json());
app.use("/topics",topics);
app.use("/users",users);
app.use("/votes",votes);

module.exports = app;
