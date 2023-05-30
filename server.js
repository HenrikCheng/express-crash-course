const express = require("express");
const app = express();

// Set app variables
app.set("view engine", "ejs");
app.use(logger);

app.get("/", (req, res) => {
  console.log("Here");
  //   res.sendStatus(500) // Status only
  // res.status(500).send("Hi"); // Status and message
  // res.download("server.js"); // Download a file
  // res.status(500).send({ mesage: "Error message" }); // Status and JSON
  res.render("index", { text: " will cause a exception" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log("request", req.originalUrl);
}

app.listen(3000);
