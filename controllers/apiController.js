function index(req, res) {
  res.json({
    message: 'Welcome to Tunely!',
    documentation_url: 'https://github.com/sf-wdi-labs/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  }); //closes json object to send
} //closes index function

//export for use elsewhere in app
module.exports = {index: index};
