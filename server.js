const seed = require("./db/seed");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.listen(port, () => {
  //Log the time in color
  console.log(`"\u001b[1;42m" ${Date().toString()} "\u001b[0m"`);
  console.log(`Express is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/dist", express.static(path.join(__dirname, "dist")));

seed();
