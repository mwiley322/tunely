// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express & bodyparser in our app
var express = require('express'),
    bodyParser = require('body-parser');
// generate a new express app
var app = express();
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

//get all albums
app.get('/api/albums', controllers.albums.index);

app.listen(process.env.PORT || 3000, function () {
  console.log('TUNES BLASTIN at host 3000');
});
