require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const host = "0.0.0.0";
const PORT = process.env.PORT || 5000;
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "front-end/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "front-end/build", "index.html"));
});
app.listen(PORT, host, () => {
  console.log(`server is started at port ${PORT} ................`);
});
