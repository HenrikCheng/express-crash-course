const express = require("express");
const app = express();

// Set app variables
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  //   res.sendStatus(500) // Status only
  // res.status(500).send("Hi"); // Status and message
  // res.download("server.js"); // Download a file
  // res.status(500).send({ mesage: "Error message" }); // Status and JSON
  res.render("index", { text: " will cause a exception" });
});

app.get("/users", (req, res) => {
  res.send("list users");
});

app.get("/users/new", (req, res) => {
  res.send("create user");
});

app.listen(3000);
