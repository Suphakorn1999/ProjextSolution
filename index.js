const express = require("express");
const controllers = require("./controllers/controller.js");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.post("/calculate", controllers.calculate);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
