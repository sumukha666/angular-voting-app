const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.static("public"));
app.set("view engine","ejs");
const cors = require("cors");
app.use(morgan("dev"));
app.use(cors());


module.exports = app;
