const express = require("express");
const app = express();
const PORT = 3003;

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.sendFile("public/Laba1.html", {
    root: __dirname
  });
});

app.listen(PORT, () => {
  console.log("Server is started")
});