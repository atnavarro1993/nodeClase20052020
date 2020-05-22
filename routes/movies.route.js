//import modules
const { Router } = require("express");
const router = Router();
const _ = require("lodash");
//import json
const movies = require("../sample.json");

router.get("/movies", (req, res) => {
  res.json(movies);
});

router.post("/movies", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = { ...req.body };
    movies.push(newMovie);
    res.json({ added: "ok" });
  } else {
    res.status(400).json({ statusCode: "badRequest" });
  }
});

router.delete("/movies/:id", (req, res) => {
  const id = req.params.id;
  _.remove(movies, (movie) => {
    return movie.id == id;
  });
  console.log(req.params);
  res.json();
});

module.exports = router;
