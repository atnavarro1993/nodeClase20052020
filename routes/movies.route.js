//import modules
const { Router } = require("express");
const router = Router();
//import json
const movies = require("../sample.json");

router.get("/movies", (req, res) => {
  res.json(movies);
});

module.exports = router;
