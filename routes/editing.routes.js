const { Router } = require('express')
const Book = require('../models/Book')
const router = Router()

// api/book/edit 
router.put('/edit', async (req, res) => {
    try {
        
        const { id, title, author, genre } = req.body

        const book = await Book.findById(id)
        
        if (!book) {
            return res.status(400).json({ message: 'There are no such book!' })
        }

        book.title = title
        book.author = author
        book.genre = genre
        await book.save()

        return res.status(200).json({ message: 'The book has been changed.' })

    } catch (e) {
        res.status(500).json({ message: e.message})
    }
})

module.exports = router