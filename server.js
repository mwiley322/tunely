////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express & bodyparser in our app
var express = require('express'),
    bodyParser = require('body-parser');
// generate a new express app
var app = express();
//our public files now require express in order to be used, serve static files.
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
//this line links the server to the controller functions
var controllers = require('./controllers');

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// lets us route to the controllers api index
app.get('/api', controllers.api.index);

//get all albums
app.get('/api/albums', controllers.albums.index);

//get one album
app.get('/api/albums/:id', controllers.albums.show);

//create an album
app.post('/api/albums', controllers.albums.create);

//update one album
app.post('/api/albums/:id', controllers.albums.update);

//delete one album
app.delete('/api/albums/:id', controllers.albums.destroy);

app.listen(process.env.PORT || 3000, function () {
  console.log('TUNES BLASTIN at host 3000');
});
