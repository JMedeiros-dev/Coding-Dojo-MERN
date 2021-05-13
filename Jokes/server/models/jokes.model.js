const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    }, 
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must me at least 3 characters long"]
    },
    
}, {timestamps: true});

const joke = mongoose.model('Joke', JokeSchema);

module.exports = joke;