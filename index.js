const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "There" });
});

const PORT = process.env.PORT || 5000;
app.listen(5000);

server.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});