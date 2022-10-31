const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
