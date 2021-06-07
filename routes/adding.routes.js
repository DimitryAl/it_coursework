const {Router} = require('express')
const Book = require('../models/Book')
const router = Router()

// /api/book/add
router.post('/add', async (req, res) => {
    try {

        const {title, author, genre} = req.body
                
        const existing = await Book.findOne({title})

        if (existing) {
            return res.status(400).json({message: "Already exists"})
        }

        const book = new Book({title, author, genre})

        await book.save()

        res.status(201).json({message: 'Book added'})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})



module.exports = router