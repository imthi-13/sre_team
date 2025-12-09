const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

module.exports = router;

