const express = require('express');
const router = express.Router();
const book = require('./models/Book');

// Creating a new book resource into the server
router.post('/', async(req, res) => {
    const { title, author, publishedDate } = req.body;

    try {
    let newBook = new book({ title, author, publishedDate });
    await newBook.save();
    return res.status(400).json({message: "Book saved successfully!"});
    res.json({newBook});
    } catch (error) {
        return res.status(500).json({message: "Error creating book!", error: err.message});
    }
});


// Reading all the books resources from the server
rotuer.get('/', async (req, res) => {
    try {
        let Books = await book.find();
        res.json({Books});
        return res.status(400).json({message: "Successfully reading all the books from the server!"});
    } catch (error) {
        return res.status(500).json({message: "Error reading books", error: err.message});
    }
});


// Reading the book by id
router.get('/id:', async (req, res) => {
    try {
        let Book = await book.findOne(req.params.id);
        if(!Book) return res.status(500).json({message: "Book is not find!", error: err.message});
        res.josn({Book});
    } catch (error) {
        return res.status(500).json({message: "Book is not availabe", error: err.message});
    }
});


// Updating the book resource by book-id
router.put('/id:', async (req, res) => {
    const { title, author, publishedDate } = req.body;

    try{
        let updatedBook = await book.findOneByidAndUpdated(req.params.id, { title, author, publishedDate }, {new: true});
        if(!updatedBook) return res.status(500).json({message: "Book by id is not found", error: err.message});
        res.json({updatedBook});
    } catch(error) {
        return res.status(500).json({message: "Book updating error", error: err.message});
    }
});


// Deleting a book by id from the server
router.delete('/id:', async (req, res) => {
    try {
        let deletedBook = await book.findOneByIdAndDelete(req.params.id);
        if(!deletedBook) return res.status(500).json({message: "book is not found and not deleted", error: err.message});
        res.json({deletedBook});
    } catch (error) {
        return res.status(500).json({message: "Book is not deleted", error: err.message});
    }
});

module.exports = router;