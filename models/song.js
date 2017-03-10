var mongoose = require('mongoose');
//schema is a property of the mongoose library that allows us to create schemas.
var Schema = mongoose.Schema;

//our Schema to template songs
var SongSchema = new Schema ({
  name: String,
  trackNumber: Number
});

//our model to create songs.
var Song = mongoose.model('Song', SongSchema);

//to use elsewhere in our app
module.exports = Song;
