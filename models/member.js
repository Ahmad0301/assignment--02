const mongoose = require('mongoose')
const{Schema} = require('mongoose')

MemberSchema = new Schema({
    name:{type:String,required:true},
    membershipNumber:{type:String,required:true},
    email:{type:String},
    membershipType:{type:String},
    contactNumber:{type:String}
})
const member = mongoose.model('member', MemberSchema)
module.exports = member