const {Router} = require('express')
const Book = require('../models/Book')
const router = Router()

// /api/books/list
router.get('/list', async (req, res) => {
    try {

        const books = await Book.find()
        res.json(books) 

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})



module.exports = router