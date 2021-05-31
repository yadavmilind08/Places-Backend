const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get in places");
  res.json({ message: "It Works!" });
});

module.exports = router;
