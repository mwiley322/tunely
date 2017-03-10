// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var db = require("./models");
var Album = db.Album;

var albumsList =[
  // data here soon!
];

Album.remove({}, function(err, albums){
  // code in here runs after all albums are removed
  Album.create(albumsList, function(err, albums){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR ', err); }
    console.log("all albums: ", albums);
    console.log("created ", albums.length, " albums");
    process.exit();
  });
});
