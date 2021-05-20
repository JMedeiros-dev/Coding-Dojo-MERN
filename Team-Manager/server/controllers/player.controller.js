const { response } = require('express');
const { Player } = require('../models/player.model');

//create
module.exports.createPlayer = (req, res) => {
    const { name, preferredPosition} = req.body;
    Player.create({
        name,
        preferredPosition
    })
        .then(player => res.json(player))
        .catch(err => res.json(err));
}

//find all
module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err))
}

// find one
module.exports.getPlayer = (req, res) => {
    Player.findOne({_id:req.params.id})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}

// update one
module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
}

// delete one
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}