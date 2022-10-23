const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on users");
});


router.get("/spesific", (req, res) => {
    res.send("We are on spesific user");
  });

module.exports = router;
