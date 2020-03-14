const express = require('express');
const router = express.Router();
const bookControls = require('../controllers/book.controller')

router.get('/getbook', bookControls.getBookById)

router.get('/getbooks',bookControls.getBooks)

router.post('/addbook', bookControls.addBook)

router.delete('/deletebook', bookControls.deleteBook)

router.put('/updatebook', bookControls.updateBookById)


module.exports = router;