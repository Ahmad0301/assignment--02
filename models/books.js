const mongoose = require('mongoose')
const{Schema} = require('mongoose')

BookSchema = new Schema({
    title : {type:String},
    author:{type:String},
    genre:{type:String},
    yearPublished:{type:Number},
    availableCopies:{type:Number}
})

const book = mongoose.model('book',BookSchema)
module.exports = book