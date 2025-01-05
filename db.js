const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/assignment_02')
const db = mongoose.connection
db.on ('connected',()=>{console.log('mongodb is connected')})
db.on ('erroe',()=>{console.log('error in connection')})
db.on ('disconnected',()=>[consol.log('mongodb is disconnected')])

module.exports = db