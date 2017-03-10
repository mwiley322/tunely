// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");
var Album = db.Album;

var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7
});

var albumList =[];
albumList.push({
              artistName: 'Nine Inch Nails',
              name: 'The Downward Spiral',
              releaseDate: '1994, March 8',
              genres: [ 'industrial', 'industrial metal' ]
            });
albumList.push({
              artistName: 'Metallica',
              name: 'Metallica',
              releaseDate: '1991, August 12',
              genres: [ 'heavy metal' ]
            });
albumList.push({
              artistName: 'The Prodigy',
              name: 'Music for the Jilted Generation',
              releaseDate: '1994, July 4',
              genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
            });
albumList.push({
              artistName: 'Johnny Cash',
              name: 'Unchained',
              releaseDate: '1996, November 5',
              genres: [ 'country', 'rock' ]
            });




Album.remove({}, function(err, albums){
 // create a bulk array of albums, expecting an array of db album objects back
 Album.create(albumList, function(err, createdAlbums){
   if (err) { return console.log('ERROR', err); }
   console.log("all albums:", createdAlbums);
   // go through each album, and call each album a taco
   createdAlbums.forEach(function stuffFullofSongs(album){
     // while i'm looking at one album, I'm going to create an array of songs in my db.
     db.Song.create(sampleSongs, function(err, dbSongs){
       if (err) { return console.log('ERROR', err); }
       console.log("SAWNGS!!!: ",dbSongs.length);
       // now that I have an array of songs, I'm going to put my songs array into this album.
       album.songs=dbSongs;
       // this album has been altered from when I originally created it because I added songs to the songs attribute. (Previously it was empty)
       album.save(function(err, succ){
         console.log("Added song");
       });//closes save function
     });//closes song create function
   }); //closes forEach loop
   console.log("created", createdAlbums.length, "albums");
  //  process.exit();
 });//closes album create function
}); //closes album remove function
