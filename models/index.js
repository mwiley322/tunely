var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Album = require('./album.js');
