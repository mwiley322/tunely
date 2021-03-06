console.log("Sanity Check: JS is working!");
/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: renderMultipleAlbums,
    error: handleError
  }); //closes ajax get request
//ADDED FORM BELOW
  $('#album-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize(); //translates request
    console.log('here is the form data: ', formData);
    $.post('/api/albums', formData, function(album) {
      console.log('album after POST', album);
      renderAlbum(album);  //render the server's response
    }); //closes ajax post request
    $(this).trigger("reset");
  }); //closes form submit function
}); //closes document ready function


function renderMultipleAlbums(albums) {
  albums.forEach(function(album) {
    renderAlbum(album);
  }); //closes foreach
}//closes rendermult.


function renderAlbum(album) {
  console.log('rendering album ', album);
  var albumHtml = (`
    <div class="row album">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin album internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail album-art">
                <img src="images/800x800.png" alt="album image">
              </div>
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Album Name:</h4>
                    <span class='album-name'>${album.name}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Artist Name:</h4>
                    <span class='artist-name'>${album.artistName}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Released date:</h4>
                    <span class='album-releaseDate'>${album.releaseDate}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of album internal row -->
            <div class='panel-footer'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end one album -->
  `);
  $('#albums').append(albumHtml);
}

function handleError(err) {
 console.log('error loading albums!: ', err);
 $('#albums').append('Sorry, there was a problem loading albums.');
}
