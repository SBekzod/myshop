const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("you are connected");
});
router.get("/home", (req, res) => {
  res.end("you are in home page");
});
router.get("/users", (req, res) => {
  res.end("you are in users page");
});
router.get("/shop", (req, res) => {
  res.end("you are in our shop page");
});

module.exports = router;
