var Song = require('./song.js');
var mongoose = require('mongoose');
//schema is a property of the mongoose library that allows us to create schemas.
var Schema = mongoose.Schema;


//our Schema to template albums
var AlbumSchema = new Schema({
  //mongoose will add an ID automatically
  name: String,
  artistName: String,
  imageUrl: String,
  releaseDate: String,
  genres: [ String ],
  songs: [Song.schema]
});

//our model to create albums.
var Album = mongoose.model('Album', AlbumSchema);

//to use elsewhere in our app
module.exports = Album;
//
// Alter the AlbumSchema to have a songs array that uses the song schema (available through the model as Song.schema).
