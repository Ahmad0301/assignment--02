const mongoose = require('mongoose')
const{Schema} = require('mongoose')

TransactionSchema = new Schema({
    transactionId:{type:String},
    bookId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'book'

    },
    memberId:{type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    issueDate:{type:String},
    returnDate:{type:String},
    status:{type:String}

})
const Transaction = mongoose.model('Transaction',TransactionSchema)
module.exports = Transaction 