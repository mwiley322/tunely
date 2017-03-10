function index(req, res) {
  res.json({
    message: 'Welcome to Tunely!',
    documentation_url: 'https://github.com/sf-wdi-labs/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/albums', description: 'Gets all albums'
      },
      {
        method: 'GET', path: '/api/albums/:id', description: 'gets a single album based on parameters'
      },
      {
        method: 'POST', path: '/api/albums', description: 'Cerates a single new album'
      },
      {
        method: 'POST', path: '/api/albums/:id', description: 'Updates a single album'
      },
      {
        method: 'DELETE', path: '/api/albums/:id', description: 'Destroys a single album'
      }
    ]//closes endpoints array
  }); //closes json object to send
} //closes index function

//export for use elsewhere in app
module.exports = {index: index};
