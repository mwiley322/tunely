//require our database models
var db = require('../models');
var Album = db.Album;

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  Album.find({}, function(err,allAlbumsFound){
    if(err){
      return console.log('index err!: ', err);
    }
    res.json(allAlbumsFound);
  }); //closes Album find
}//closes index function

// POST /api/albums
function create(req, res) {
  var newAlbum = new db.Album(req.body);
  newAlbum.save(function (err, createdAlbum) {
    if (err) {
      console.log('IT NOT IS WORKING: ', err);
      res.send(err);
    }
    console.log('IT IS WORKING: ', createdAlbum);
    res.json(createdAlbum);
  }); //closes save function
}//closes create function


// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
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
