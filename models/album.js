var mongoose = require('mongoose');
//schema is a property of the mongoose library that allows us to create schemas.
var Schema = mongoose.Schema;

//our Schema to template books
var AlbumSchema = new Schema({
  //don't need to add _id since mongoose will add it automatically
  title: String,
  artist: String,
  image: String,
  release_date: String
});

//our model to create books, seems like an extra step... you base every book base on the book schema.
var Album = mongoose.model('Album', AlbumSchema);

//to use elsewhere in our app
module.exports = Album;
