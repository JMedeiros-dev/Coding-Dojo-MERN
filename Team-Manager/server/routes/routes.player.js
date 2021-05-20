const PlayerController = require('../controllers/player.controller');

module.exports = function(app) {
    app.post('/api/players/new', PlayerController.createPlayer); //create
    app.get('/api/players', PlayerController.getAllPlayers); //find all
    app.get('/api/players/:id', PlayerController.getPlayer); //find one
  	app.put('/api/players/:id', PlayerController.updatePlayer); //update one
  	app.delete('/api/players/:id', PlayerController.deletePlayer); // delete one
}