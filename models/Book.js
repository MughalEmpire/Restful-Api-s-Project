const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 

    autor: {
        type: String,
        required: true
    }, 

    publishedDate: {
        type: String,
        default: Date.now
    }
});


module.exports = mongoose.model('Book', bookSchema);