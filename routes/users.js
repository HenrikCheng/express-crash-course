const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("list users");
});

router.get("/new", (req, res) => {
  res.send("create user");
});

module.exports = router;
