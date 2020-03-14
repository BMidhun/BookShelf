const BookModel = require('../models/books');
const UserModel = require('../models/users');
function getBookById(req,res,next) {

    const bookId = req.query.id;

    BookModel.findById(bookId,(err,bookdocument) => {
        err ? res.json({success:false}) : res.json({success:true,data : bookdocument});
    })

}

function getBooks(req,res,next) {
    const skip =  parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const order = req.query.order;

    BookModel.find({}).skip(skip).sort({_id:order}).limit(limit).exec((err,bookdocuments) => {

        err ? res.send(err) : res.json({success:true,data: bookdocuments});
    })
}


function addBook (req,res,next) {

    const bookdata = req.body;
    const book = new BookModel(bookdata);
    book.save((err,bookdocument) => {
        err ? res.json({success:false}) : res.json({success : true, data:bookdocument});
    })

}


function deleteBook (req,res,next){

    const bookId = req.query.id
    BookModel.findByIdAndRemove(bookId,(err) => {
        err ? res.json({success:false}) : res.json({success:true})
    })
}

function updateBookById (req,res,next) {

    const bookId = req.body._id;
    const updateData = req.body

    BookModel.findByIdAndUpdate(bookId,updateData,{new:true},(err,bookdocument) => {

        err  ? res.json({success:false}) : res.json({success:true,data:bookdocument});
    })

}

module.exports = {

    getBookById,
    getBooks,
    addBook,
    deleteBook,
    updateBookById
}

