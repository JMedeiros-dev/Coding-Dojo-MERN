const joke = require('../models/jokes.model')


module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
    joke.findOne(req.params.id)
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updatedExistingJoke = (req, res) => {
    joke.findOneAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    joke.deleteOne(req.params.id)
        .then(result => res.json({ result: result}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}
module.exports.findRandomJoke = (req, res) => {
    joke.find().limit(1)
    .then(randomJoke => res.json({ joke: randomJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


