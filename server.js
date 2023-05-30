const express = require("express");
const app = express();

// Set app variables
app.set("view engine", "ejs");
app.use(logger);
app.use(express.static("public"));

app.get("/demo", (req, res) => {
  console.log("Here");
  //   res.sendStatus(500) // Status only
  // res.status(500).send("Hi"); // Status and message
  // res.download("server.js"); // Download a file
  // res.status(500).send({ mesage: "Error message" }); // Status and JSON
  res.render("demo", { text: " will cause a exception" });
});

app.get("/posts", (req, res) => {
  res.render("posts");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log("request", req.originalUrl);
  next();
}

app.listen(3000);
