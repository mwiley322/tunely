//require our database models
var db = require('../models');
var Album = db.Album;

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  Album.find({}, function(err,allAlbumsFound){
    if (err) { return console.log('index err!: ', err); }
    res.json(allAlbumsFound);
  }); //closes Album find
}//closes index function

// POST /api/albums
function create(req, res) {
  var newAlbum = new Album(req.body);
  newAlbum.save(function (err, createdAlbum) {
    if (err) { console.log('err: ', err);
      res.send(err);
    }
    console.log('IT IS WORKING: ', createdAlbum);
    res.json(createdAlbum);
  }); //closes save function
}//closes create function


// GET /api/albums/:id
function show(req, res) {
  var albumId = req.params.id
  console.log('album show: ', req.params);
  Album.findById(albumId, function(err, foundAlbum) {
    if (err) {
      res.sendStatus(204);
    } else {
      res.json(foundAlbum);
    } //closes else statement
  }); //closes findById function
} //closes show function

// DELETE /api/albums/:id
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:id
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
