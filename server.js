const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  //   res.sendStatus(500) // Status only
  res.status(500).send("Hi"); // Status and message
});

app.listen(3000);
