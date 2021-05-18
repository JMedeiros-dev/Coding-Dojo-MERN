const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.post('/api/authors', AuthorController.createAuthor);//create
    app.get('/api/authors', AuthorController.getAllAuthors); //find all
    app.get('/api/authors/:id', AuthorController.getAuthor); //find one
  	app.put('/api/authors/:id', AuthorController.updateAuthor); //update one
  	app.delete('/api/authors/:id', AuthorController.deleteAuthor); // delete one
}