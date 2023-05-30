const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("list users");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.get("/create", (req, res) => {
  res.send("Create user");
});

// Chain together all requests
router
  .route("/:userId")
  .get((req, res) => {
    const userId = req.params.userId;
    console.log("request.user: ", req.users);
    res.send(`Get user with id: ${userId}`);
  })
  .put((req, res) => {
    const userId = req.params.userId;
    res.send(`Update user with id: ${userId}`);
  })
  .delete((req, res) => {
    const userId = req.params.userId;
    res.send(`Delete user with id: ${userId}`);
  });

const users = [{ name: "Kyle" }, { name: "Henrik" }];
router.param("userId", (req, res, next, userId) => {
  req.users = users[userId];
  next();
});

// // Dynamic route id
// router.get("/:userId", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Get user with id: ${userId}`);
// });

// // Update user
// router.put("/:userId", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Update user with id: ${userId}`);
// });

// // Delete user
// router.delete("/:userId", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`Delete user with id: ${userId}`);
// });

module.exports = router;
