const express = require("express");
const controllers = require("./controllers/controller.js");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.post("/add", (req, res) => {
  res.send(controllers.add(req, res));
});

app.post("/sub", (req, res) => {
  res.send(controllers.sub(req, res));
});

app.post("/mul", (req, res) => {
  res.send(controllers.mul(req, res));
});

app.post("/div", (req, res) => {
  res.send(controllers.div(req, res));
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
