const express = require("express");
const app = express();
(fs = require("fs")), (path = require("path"));
bodyParser = require("body-parser");
uuid = require("uuid");

morgan = require("morgan");
app.use(bodyParser.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});

app.use(morgan("common", { stream: accessLogStream }));
app.use(express.static("public"));

let users = [
  {
    id: 1,
    name: "Brian",
    favoriteMovies: []
  },
  {
    id:2,
    name: "Ted",
    favoriteMovies: ["Red Cliff"]
  },
]

let movies = [
  {
    "id": 1,
    "Title": "Red Cliff",
    "Description":
      "In 208 A.D., in the final days of the Han Dynasty, shrewd Prime Minster Cao Cao convinced the fickle Emperor Han the only way to unite all of China was to declare war on the kingdoms of Xu in the west and East Wu in the south.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMTcyOTQ3NDA1OV5BMl5BanBnXkFtZTcwMDY3NzM4Mg@@._V1_.jpg",
    "Genre": {
      "Name":"Action",
    },
    "Director": {
      "Name": "John Woo",
      "Bio": "Born in southern China, John Woo grew up in Hong Kong, where he began his film career as an assistant director in 1969, working for Shaw Brothers Studios.",
      "Birthyear": "May 1, 1946",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 2,
    "Title": "House of Flying Daggers",
    "Description":
      "A romantic police captain breaks a beautiful member of a rebel group out of prison to help her rejoin her fellows, but things are not what they seem.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMWYzM2JmOWItN2IxZC00MmFjLWEyMTQtYTQ2ODBiNjRlYmZlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    "Genre": {
      "Name":"Romance",
    },
    "Director": {
      "Name": "Yimou Zhang",
      "Bio": "Yimou Zhang was born on November 14, 1951 in Xi'an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
      'Birthyear': "Nov 14, 1951",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 3,
    'Title': "Call of Heroes",
    "Description":
      "A group of villagers must stand up to a warlord's psychopath son, who is protected by a Commander with proficient martial arts skills as well as a small army.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BNDNkMjg2MDgtMmJiZC00ZmRhLWEyMWUtOTBmMDUzZTNlMTAzXkEyXkFqcGdeQXVyNjc4MjAzNTE@._V1_.jpg",
    'Genre': {
      "Name":"Action",
    },
    "Director": {
      'Name': "Benny Chan",
      'Bio': "Benny Chan Muk-sing (simplified Chinese: 陈木胜; traditional Chinese: 陳木勝; pinyin: Chén Mùshèng; 24 October 1961[1] – 23 August 2020[2]) was a Hong Kong film director, producer and screenwriter.[3] He is best known for his feature films such as A Moment of Romance, Big Bullet, Who Am I?, Rob-B-Hood, New Police Story, Shaolin, The White Storm, Call of Heroes, and Raging Fire.",
      "Birthyear": "Oct 7, 1961",
      "Deathyear": "Aug 23, 2020",
    },
  },
  {
    "id": 4,
    "Title": "Crouching Tiger, Hidden Dragon",
    "Description":
      "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    'Genre': {
      "Name":"Adventure",
    },
    "Director": {
      "Name": "Ang Lee",
      'Bio': "Born in 1954 in Pingtung, Taiwan, Ang Lee has become one of today's greatest contemporary filmmakers. Ang graduated from the National Taiwan College of Arts in 1975 and then came to the U.S. to receive a B.F.A. Degree in Theatre/Theater Direction at the University of Illinois at Urbana-Champaign, and a Masters Degree in Film Production at New York University.",
      'Birthyear': "Oct 23, 1954",
      'Deathyear': "N/A",
    },
  },
  {
    'id': 5,
    "Title": "Ip Man",
    'Description':
      "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    'Genre': {
      "Name":"Biography",
    },
    "Director": {
      "Name": "Wilson Yip",
      "Bio": "Wilson Yip is known for Ip Man (2008), Kill Zone (2005) and Ip Man 4: The Finale (2019).",
      "Birthyear": "Oct 23, 1964",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 6,
    "Title": "Shadow",
    "Description":
      "In a Chinese royal court, an army commander secretly trains a 'shadow' to retake a city against the wishes of the king.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMWFjODJjZTMtOGYwMy00ZWYzLThjZWMtOTAxOTJmMTJhN2QzXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg",
    "Genre": {
      "Name":"Fantasy",
    },
    "Director": {
      "Name": "Yimou Zhang",
      "Bio": "Yimou Zhang was born on November 14, 1951 in Xi'an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
      "Birthyear": "Nov 14, 1951",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 7,
    "Title": "Kung Fu Hustle",
    "Description":
      "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious 'Axe Gang' while residents of a housing complex exhibit extraordinary powers in defending their turf.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_FMjpg_UX1000_.jpg",
    "Genre": {
      "Name":"Comedy",
    },
    "Director": {
      "Name": "Stephen Chow",
      "Bio": "Stephen Chiau Sing-chi (Chinese: 周星馳, born 22 June 1962), known professionally as Stephen Chow, is a Hong Kong comedian, filmmaker and actor, known for Shaolin Soccer and Kung Fu Hustle.",
      "Birthyear": "May 1, 1962",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 8,
    "Title": "Shaolin Soccer",
    "Description":
      "After a fateful mistake costing his career, an ex-soccer player bum meets a shaolin kung fu student trying to spread the word of kung fu. The ex-soccer player helps reconcile with his five brothers, and teaches them soccer, adding shaolin kung fu as a twist",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMTk3NDg5NTE4MV5BMl5BanBnXkFtZTcwNzMxMjAwMQ@@._V1_.jpg",
    "Genre":{
      "Name": "Comedy",
    },
    "Director": {
      "Name": "Stephen Chow",
      "Bio": "Stephen Chiau Sing-chi (Chinese: 周星馳, born 22 June 1962), known professionally as Stephen Chow, is a Hong Kong comedian, filmmaker and actor, known for Shaolin Soccer and Kung Fu Hustle.",
      "Birthyear": "May 1, 1962",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 9,
    "Title": "Hero",
    "Description":
      "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "Genre":{
      "Name": "Action",
    },
    "Director": {
      "Name": "Yimou Zhang",
      "Bio": "Yimou Zhang was born on November 14, 1951 in Xi'an, Shaanxi, China. He is a director and writer, known for Hero (2002), House of Flying Daggers (2004) and Curse of the Golden Flower (2006).",
      "Birthyear": "Nov 14, 1951",
      "Deathyear": "N/A",
    },
  },
  {
    "id": 10,
    "Title": "Iron Monkey",
    "Description":
      "A martial artist/doctor steals from the corrupt authorities as a masked thief to give to the poor while another martial artist/doctor is forced to hunt him down. But a major threat unites them as a powerful and traitorous shaolin monk takes over the authorities.",
    "imgUrl":
      "https://m.media-amazon.com/images/M/MV5BYjJmMGI4NjctYjUzNC00MDE2LWJiMjYtOGZmN2Y2ZTZjMDY5XkEyXkFqcGdeQXVyMTg2NTc4MzA@._V1_.jpg",
    "Genre": {
      "Name":"Adventure",
    },
    "Director": {
      "Name": "Woo-Ping Yuen",
      "Bio": "Woo-Ping Yuen was born on January 1, 1945 in Guangzhosssu, China. He is a director and actor, known for Crouching Tiger, Hidden Dragon (2000), Fearless (2006) and Kill Bill: Vol. 2 (2004).",
      "Birthyear": "Jan 1, 1945",
      "Deathyear": "N/A",
    },
  },
];

//Create
app.post('/users', (req,res) => {
  const newUser=req.body;

  if(newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else{
    res.status(400).send('users neeed names')
  }
})

//Update
app.put('/users/:id', (req,res) => {
  const { id } = req.params;
  const updatedUser=req.body;
// double equals sign because this id will be a string
  let user = users.find(user => user.id == id);

  if(user) {
    user.name=updatedUser.name;
    res.status(200).send.json(user);
  } else {
    res.status(400).send('No such user')
  }

})

//Create

app.post('/users/:id/:movieTitle', (req,res) => {
  const { id, movieTitle } = req.params;
 
  let user = users.find(user => user.id == id);

  if(user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
  } else {
    res.status(400).send('Incompatible Film')
  }

})


//Delete

app.delete('/users/:id/:movieTitle', (req,res) => {
  const { id, movieTitle } = req.params;
 
  let user = users.find(user => user.id == id);

  if(user) {
    user.favoriteMovies=user.favoriteMovies.filter(title => title !==movieTitle);
    res.status(200).send(`${movieTitle} has been removed from user ${id}'s array`);
  } else {
    res.status(400).send('Uh oh something broke')
  }

})

app.delete('/users/:id', (req,res) => {
  const { id } = req.params;
 
  let user = users.find(user => user.id == id);

  if(user) {
    users=users.filter(user => user.id !=id);
    res.status(200).send(`user ${id} has been deleted`);
  } else {
    res.status(400).send('Uh oh something broke')
  }


})



//Read

app.get("/", (req, res) => {
  res.send("Welcome to my Kung Fu film app!");
});

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  const movie = movies.find(movie => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send("Title not found");
  }
});

 app.get("/movies/genre/:genreName", (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find(movie => movie.Genre.Name === genreName).Genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send("Genre not found");
  }
 });

 app.get("/movies/director/:directorName", (req, res) => {
  const { directorName } = req.params;
  const director = movies.find(movie => movie.Director.Name === directorName).Director;

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send("Director not found");
  }
});

app.use("/MyDocumentation", express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});