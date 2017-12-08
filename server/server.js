const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/humans.txt", (req, res) => {
  res.sendFile(path.join(publicPath, "humans.txt"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(publicPath, "robots.txt"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("The magic is happening on port", port);
});
