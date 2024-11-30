const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const db = require('./db')
const books = require('./models/books')
const members = require ('./models/member')
const Transaction = require('./models/transaction')

app.post ('/creat', async(req,resp)=>{
    const {book,member,transaction} = req.body
    const bookobj = await books.create(book)
    const memberobj= await members.create(member)
    transaction.bookId = bookobj._id
    transaction.memberId=memberobj._id
    const transactionobj = await Transaction.create(transaction)
    resp.json({"Book": bookobj, "member":memberobj,"transaction": transactionobj})
})

app.get('/find',async(req,resp)=>{
    const book = await books.find()
    const member = await members.find()
    const transaction = await Transaction.find()
    resp.obj = ({"book":book, "member":member , "transaction":transaction})
} )

