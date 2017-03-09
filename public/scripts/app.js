console.log("Sanity Check: JS is working!");
/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

 /* hard-coded data! */
 var sampleAlbums = [];
 sampleAlbums.push({
              artistName: 'Ladyhawke',
              name: 'Ladyhawke',
              releaseDate: '2008, November 18',
              genres: [ 'new wave', 'indie rock', 'synth pop' ]
            });
 sampleAlbums.push({
              artistName: 'The Knife',
              name: 'Silent Shout',
              releaseDate: '2006, February 17',
              genres: [ 'synth pop', 'electronica', 'experimental' ]
            });
 sampleAlbums.push({
              artistName: 'Juno Reactor',
              name: 'Shango',
              releaseDate: '2000, October 9',
              genres: [ 'electronic', 'goa trance', 'tribal house' ]
            });
 sampleAlbums.push({
              artistName: 'Philip Wesley',
              name: 'Dark Night of the Soul',
              releaseDate: '2008, September 12',
              genres: [ 'piano' ]
            });
 /* end of hard-coded data */


$(document).ready(function() {
  console.log('app.js loaded!');
}); //closes document ready function


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
}

// function getBookHtml(book) {
//   return `<hr>
//           <p>
//             <b>${book.title}</b>
//             by ${book.author}
//             <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
//           </p>`;
// }

//
// function getAllBooksHtml(books) {
//   return books.map(getBookHtml).join("");
// }
//
// // helper function to render all posts to view
// // note: we empty and re-render the collection each time our post data changes
// function render () {
//   // empty existing posts from view
//   $booksList.empty();
//
//   // pass `allBooks` into the template function
//   var booksHtml = getAllBooksHtml(allBooks);
//
//   // append html to the view
//   $booksList.append(booksHtml);
// };
//
// function handleSuccess(json) {
//   allBooks = json;
//   render();
// }
//
// function handleError(e) {
//   console.log('uh oh');
//   $('#bookTarget').text('Failed to load books, is the server working?');
// }
//
// function newBookSuccess(json) {
//   $('#newBookForm input').val('');
//   allBooks.push(json);
//   render();
// }
//
// function newBookError() {
//   console.log('newbook error!');
// }
//
// function deleteBookSuccess(json) {
//   var book = json;
//   console.log(json);
//   var bookId = book._id;
//   console.log('delete book', bookId);
//   // find the book with the correct ID and remove it from our allBooks array
//   for(var index = 0; index < allBooks.length; index++) {
//     if(allBooks[index]._id === bookId) {
//       allBooks.splice(index, 1);
//       break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
//     }
//   }
//   render();
// }
//
// function deleteBookError() {
//   console.log('deletebook error!');
// }
