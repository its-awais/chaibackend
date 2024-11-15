require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  //basically my computer send thsi req to server
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("<h1>you are just pathethic</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>I am h2 </h2>");
});

app.listen(process.env.PORT, () => {
  //and this one listen the req and send it back(this is a server)
  console.log(`Example app listening on port ${port}`);
});
