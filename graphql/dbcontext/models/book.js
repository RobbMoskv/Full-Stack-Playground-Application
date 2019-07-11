const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorid: String,
});

// Model mapper
module.exports = mongoose.model('Book', bookSchema);