const express = require("express");
const app = express();
const port = 3535;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", (req, res) => {
  res.render('main')
});

app.listen(port, () => {
  console.log(`port is listeing on ${port}`);
});
