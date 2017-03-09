// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
    bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();
var db = require('./models');

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



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



// // get all books
app.get('/api/albums', function (req, res) {
  // send all books as JSON response
  res.json(sampleAlbums);
}); //closes find all function
//
// // search one book
// app.get('/api/books/:id', function (req, res) {
//   // find one book by its id
//   var id = req.params.id;
//   console.log('books show: ', req.params);
//   db.Book.findById(id, function(err, foundBook) {
//     if (err) {
//       res.sendStatus(204);
//     } else {
//       res.json(foundBook);
//     }
//   });
//   // for(var i=0; i < books.length; i++) {
//   //   if (books[i]._id === req.params.id) {
//   //     res.json(books[i]);
//   //     break; // we found the right book, we can stop searching
//   //   }
//   // }
// });
//
//
// // create new book
// app.post('/api/books', function createNewBook(req, res) {
//   // create new book with form data (`req.body`)
//   var newBook = new db.Book(req.body);
//   newBook.save(function (err, createdBook) {
//     if (err) {
//       console.log('IT NOT IS WORKING: ', err);
//       res.send(err);
//     }
//     console.log('IT IS WORKING: ', createdBook);
//     res.send(createdBook);
//   }); //closes newBook function
//   // var newBook = req.body; (EXPRESS FUNCTION)
//   // newBook._id = newBookUUID++;
//   // books.push(newBook);
//   // res.json(newBook);
// });
//
// // update book
// app.put('/api/books/:id', function update(req,res){
// // get book id from url params (`req.params`)
//   console.log('books update', req.params);
//   var bookId = req.params.id; //id to search
//   var bookToUpdate = req.body; //form data to update
//   db.Book.findOneAndUpdate({_id : bookId},bookToUpdate,function(err, updatedBook) { //findOneAndUpdate will find the book by ID, the form data, and spit out either success or error.
//     if (err) {
//       res.sendStatus(204); //no content message
//     } else {
//       updatedBook.save(); //save successful update to object
//       res.json(updatedBook); //render to user the updated book
//     } //closes else statement
//   }); //closes update function
//   // // find the index of the book we want to remove (EXPRESS FUNCTION)
//   // var updateBookIndex = books.findIndex(function(element, index) {
//   //   return (element._id === parseInt(req.params.id)); //params are strings
//   // });
//   // console.log('updating book with index', deleteBookIndex);
//   // var bookToUpdate = books[deleteBookIndex];
//   // books.splice(updateBookIndex, 1, req.params);
//   // res.json(req.params);
// });
//
// // delete book
// app.delete('/api/books/:id', function deleteBook(req, res) {
//   console.log('books delete', req.params);
//   var bookId = req.params.id;
//   // // find the index of the book we want to remove
//   // var deleteBookIndex = books.findIndex(function(element, index) {
//   //   return (element._id === parseInt(req.params.id)); //params are strings
//   // });
//   // console.log('deleting book with index', deleteBookIndex);
//   // var bookToDelete = books[deleteBookIndex];
//   // books.splice(deleteBookIndex, 1);
//   // res.json(bookToDelete);
//   db.Book.findOneAndRemove({_id : bookId}, function(err, deletedBook) {
//     // We'll create a simple object to send back with a message and the id of the document that was removed
//     // You can really do this however you want, though.
//     if (err) {
//       console.log('err!!!!!!!! ', err);
//     } else {
//       res.json(deletedBook);
//     } //closes else statement
//   }); //closes findOneandRemove function
// }); //closes deleteBook function
//

app.listen(process.env.PORT || 3000, function () {
  console.log('Tunes now playing at http://localhost:3000/');
});
