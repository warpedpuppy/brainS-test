const express = require ("express");
const app=express();
fs = require('fs'),
path = require('path');

morgan = require('morgan');


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use(morgan('common', {stream: accessLogStream}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my Kung Fu film app!');
});

app.get('/movies', (req, res) => {
  res.send('My top 10 movies are Red Cliff, House of Flying Daggers, Call of Heroes, Crouching Tiger Hidden Dragon, Ip Man, Shadow, Kung Fu Hustle, Shaolin Soccer, Hero and Iron Monkey .');
});

app.use('/MyDocumentation', express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});