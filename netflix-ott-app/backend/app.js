const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const movieRoutes = require("./routes/movies");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/ott", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/movies", movieRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

