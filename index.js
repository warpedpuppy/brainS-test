const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { reset } = require("nodemon");
const { monitorEventLoopDelay } = require("perf_hooks");
const Models = require("./models/models");

const Movie = Models.Movie;
const User = Models.User;

mongoose.connect("mongodb://localhost:27017/myFlixDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(fs = require("fs")), (path = require("path"));
bodyParser = require("body-parser");
uuid = require("uuid");
morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(express.static("public"));

// let users = [
//   {
//     id: 1,
//     name: "Brian",
//     favoriteMovies: [],
//   },
//   {
//     id: 2,
//     name: "Ted",
//     favoriteMovies: ["Red Cliff"],
//   },
// ];

// let movies = [
//   {
//     id: 1,
//     Title: "Red Cliff",
//     Description:
//       "In 208 A.D., in the final days of the Han Dynasty, shrewd Prime Minster Cao Cao convinced the fickle Emperor Han the only way to unite all of China was to declare war on the kingdoms of Xu in the west and East Wu in the south.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMTcyOTQ3NDA1OV5BMl5BanBnXkFtZTcwMDY3NzM4Mg@@._V1_.jpg",
//     Genre: {
//       Name: "Action",
//     },
//     Director: {
//       Name: "John Woo",
//       Bio: "Born in southern China, John Woo grew up in Hong Kong, where he began his film career as an assistant director in 1969, working for Shaw Brothers Studios.",
//       Birthyear: "May 1, 1946",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 2,
//     Title: "House of Flying Daggers",
//     Description:
//       "A romantic police captain breaks a beautiful member of a rebel group out of prison to help her rejoin her fellows, but things are not what they seem.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMWYzM2JmOWItN2IxZC00MmFjLWEyMTQtYTQ2ODBiNjRlYmZlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
//     Genre: {
//       Name: "Romance",
//     },
//     Director: {
//       Name: "Yimou Zhang",
//       Bio: "Yimou Zhang was born on November 14, 1951 in Xi''an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
//       Birthyear: "Nov 14, 1951",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 3,
//     Title: "Call of Heroes",
//     Description:
//       "A group of villagers must stand up to a warlord's psychopath son, who is protected by a Commander with proficient martial arts skills as well as a small army.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BNDNkMjg2MDgtMmJiZC00ZmRhLWEyMWUtOTBmMDUzZTNlMTAzXkEyXkFqcGdeQXVyNjc4MjAzNTE@._V1_.jpg",
//     Genre: {
//       Name: "Action",
//     },
//     Director: {
//       Name: "Benny Chan",
//       Bio: "Benny Chan Muk-sing was a Hong Kong film director, producer and screenwriter. He is best known for his feature films such as A Moment of Romance, Big Bullet, Who Am I?, Rob-B-Hood, New Police Story, Shaolin, The White Storm, Call of Heroes, and Raging Fire.",
//       Birthyear: "Oct 7, 1961",
//       Deathyear: "Aug 23, 2020",
//     },
//     Featured: "True",
//   },
//   {
//     id: 4,
//     Title: "Crouching Tiger, Hidden Dragon",
//     Description:
//       "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//     Genre: {
//       Name: "Adventure",
//     },
//     Director: {
//       Name: "Ang Lee",
//       Bio: "Born in 1954 in Pingtung, Taiwan, Ang graduated from the National Taiwan College of Arts in 1975 and then came to the U.S. to receive a B.F.A. Degree in Theatre/Theater Direction at the University of Illinois at Urbana-Champaign, and a Masters Degree in Film Production at New York University.",
//       Birthyear: "Oct 23, 1954",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 5,
//     Title: "Ip Man",
//     Description:
//       "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     Genre: {
//       Name: "Biography",
//     },
//     Director: {
//       Name: "Wilson Yip",
//       Bio: "Wilson Yip is known for Ip Man (2008), Kill Zone (2005) and Ip Man 4: The Finale (2019).",
//       Birthyear: "Oct 23, 1964",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 6,
//     Title: "Shadow",
//     Description:
//       "In a Chinese royal court, an army commander secretly trains a 'shadow' to retake a city against the wishes of the king.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMWFjODJjZTMtOGYwMy00ZWYzLThjZWMtOTAxOTJmMTJhN2QzXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg",
//     Genre: {
//       Name: "Fantasy",
//     },
//     Director: {
//       Name: "Yimou Zhang",
//       Bio: "Yimou Zhang was born on November 14, 1951 in Xi'an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
//       Birthyear: "Nov 14, 1951",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 7,
//     Title: "Kung Fu Hustle",
//     Description:
//       "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious 'Axe Gang' while residents of a housing complex exhibit extraordinary powers in defending their turf.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_FMjpg_UX1000_.jpg",
//     Genre: {
//       Name: "Comedy",
//     },
//     Director: {
//       Name: "Stephen Chow",
//       Bio: "Stephen Chiau Sing-chi (Chinese: 周星馳, born 22 June 1962), known professionally as Stephen Chow, is a Hong Kong comedian, filmmaker and actor, known for Shaolin Soccer and Kung Fu Hustle.",
//       Birthyear: "May 1, 1962",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 8,
//     Title: "Shaolin Soccer",
//     Description:
//       "After a fateful mistake costing his career, an ex-soccer player bum meets a shaolin kung fu student trying to spread the word of kung fu. The ex-soccer player helps reconcile with his five brothers, and teaches them soccer, adding shaolin kung fu as a twist.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMTk3NDg5NTE4MV5BMl5BanBnXkFtZTcwNzMxMjAwMQ@@._V1_.jpg",
//     Genre: {
//       Name: "Comedy",
//     },
//     Director: {
//       Name: "Stephen Chow",
//       Bio: "Stephen Chiau Sing-chi (Chinese: 周星馳, born 22 June 1962), known professionally as Stephen Chow, is a Hong Kong comedian, filmmaker and actor, known for Shaolin Soccer and Kung Fu Hustle.",
//       Birthyear: "May 1, 1962",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 9,
//     Title: "Hero",
//     Description:
//       "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
//     Genre: {
//       Name: "Action",
//     },
//     Director: {
//       Name: "Yimou Zhang",
//       Bio: "Yimou Zhang was born on November 14, 1951 in Xi'an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
//       Birthyear: "Nov 14, 1951",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
//   {
//     id: 10,
//     Title: "Iron Monkey",
//     Description:
//       "A martial artist/doctor steals from the corrupt authorities as a masked thief to give to the poor while another martial artist/doctor is forced to hunt him down. But a major threat unites them as a powerful and traitorous shaolin monk takes over the authorities.",
//     imgUrl:
//       "https://m.media-amazon.com/images/M/MV5BYjJmMGI4NjctYjUzNC00MDE2LWJiMjYtOGZmN2Y2ZTZjMDY5XkEyXkFqcGdeQXVyMTg2NTc4MzA@._V1_.jpg",
//     Genre: {
//       Name: "Adventure",
//     },
//     Director: {
//       Name: "Woo-Ping Yuen",
//       Bio: "Woo-Ping Yuen was born on January 1, 1945 in Guangzhosssu, China. He is a director and actor, known for Crouching Tiger, Hidden Dragon (2000), Fearless (2006) and Kill Bill: Vol. 2 (2004).",
//       Birthyear: "Jan 1, 1945",
//       Deathyear: "N/A",
//     },
//     Featured: "True",
//   },
// ];

//Create
app.post("/users", (req, res) => {
  User.findOne({ name: req.body.name }).then((user) => {
    if (user) {
      return res.status(400).send(req.body.name + "already exists");
    } else {
      User.create({
        name: req.body.name,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      })
        .then((user) => {
          res.status(201).json(user);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Error: " + error);
        });
    }
  });
});

//Create

app.put("/users/:name/:movies/:id", (req, res) => {
  User.findOneAndUpdate(
    { name: req.params.name },
    {
      $push: { favoriteMovies: req.params.id },
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

//Read

app.get("/", (req, res) => {
  res.send("Welcome to my Kung Fu film app!");
});

app.get("/movies", (req, res) => {
  return Movie.find()
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

app.get("/movies/:Title", (req, res) => {
  const { Title } = req.params;
  return Movie.find({ Title: Title })
    .then((movies) => res.status(200).json(movies))
    .catch((e) => console.error(e));
});

app.get("/movies/genre/:genreName", (req, res) => {
  const { genreName } = req.params;
  Movie.find({ "Genre.Name": genreName })
    .then((results) => res.status(200).json(results))
    .catch((e) => console.error(e));
});

app.get("/movies/director/:directorName", (req, res) => {
  const { directorName } = req.params;
  Movie.find({ "Director.Name": directorName })
    .then((results) => res.status(200).json(results))
    .catch((e) => console.error(e));
});

app.get("/users", (req, res) => {
  User.find()
    .then((User) => {
      res.status(201).json(User);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

app.get("/users/:name", (req, res) => {
  User.findOne({ name: req.params.name })
    .then((results) => res.status(200).json(results))
    .catch((e) => console.error(e));
});

//Update
app.put("/users/:name", (req, res) => {
  User.findOneAndUpdate(
    { name: req.params.name },
    {
      $set: {
        name: req.body.name,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

app.post("/users/:name/movies/:MovieID", (req, res) => {
  User.findOneAndUpdate(
    { name: req.params.name },
    {
      $push: { favoriteMovies: req.params.MovieID },
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});
//Delete

app.delete("/users/:name/movies/:MovieID", (req, res) => {
  User.findOneAndUpdate(
    { name: req.params.name },
    {
      $pull: { favoriteMovies: req.params.MovieID },
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

app.delete("/users/:name", (req, res) => {
  User.findOneAndRemove({ name: req.params.name })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.name + " was not found");
      } else {
        res.status(200).send(req.params.name + " was deleted.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

app.use("/MyDocumentation", express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
