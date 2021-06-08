const {Schema, model} = require('mongoose');


const bookSchema = new Schema({
    title:  {type: String, required: true, unique: true},
    author: {type: String},
    genre:  {type: String, required: true}
});

module.exports = model('Book', bookSchema);