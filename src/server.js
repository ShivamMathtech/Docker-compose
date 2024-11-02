const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome! to  docker compose How are you</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
