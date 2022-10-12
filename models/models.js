const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Genre: {
    Name: String,
    Description: String,
  },
  Director: {
    Name: String,
    Bio: String,
  },
  ImagePath: String,
  Featured: Boolean,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],
});

const Movie = mongoose.model("movies", movieSchema);
const User = mongoose.model("users", userSchema);

module.exports.Movie = Movie;
module.exports.User = User;
