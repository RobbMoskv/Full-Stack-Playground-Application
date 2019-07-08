const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
});

// Model mapper
module.exports = mongoose.model('Author', authorSchema);