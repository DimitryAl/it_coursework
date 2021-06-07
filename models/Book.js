const {Schema, model} = require('mongoose');


const bookSchema = new Schema({
    title:  {type: String, required: true},
    //author: {type: Schema.ObjectId, ref: 'Author', required: true},
    author: {type: String},
    //genre:  [{type: Schema.ObjectId, ref: 'Genre'}]
    genre:  {type: String, required: true}
});

module.exports = model('Book', bookSchema);