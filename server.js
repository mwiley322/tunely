// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express & bodyparser in our app
var express = require('express'),
    bodyParser = require('body-parser');
// generate a new express app
var app = express();
//require our database models
var db = require('./models');
// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
//allows us to access the controller functions
var controllers = require('./controllers');


////////////////////
//  DATA --seed.js
///////////////////


////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// lets us route to the controllers api index 
app.get('/api', controllers.api.index);
//
// // // get all books
// app.get('/api/albums', function (req, res) {
//   // send all books as JSON response
//   res.json(sampleAlbums);
// }); //closes get all books function

app.listen(process.env.PORT || 3000, function () {
  console.log('Tunes now playing at http://localhost:3000/');
});
