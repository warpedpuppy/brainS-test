const mongoose = require("mongoose");

let movieSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Genre: {
    name: String,
    Description: String,
  },
  Director: {
    Name: String,
    Bio: String,
  },
  ImagePath: String,
  Featured: Boolean,
});

let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movie" }],
});

let movies = mongoose.model("movies", movieSchema);
let users = mongoose.model("users", userSchema);

module.exports.movies = movies;
module.exports.users = users;
