const express = require('express');
const mongoose = require('mongoose');
const config =  require('config');

//db.setUpConnection(configs.address);

const app = express();
const PORT = config.get('Port')

app.use(express.json({ extended:true }))
app.use('/api/book', require('./routes/adding.routes'))
app.use('/api/books', require('./routes/listing.routes'))
app.use('/api/book', require('./routes/editing.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('address'), {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit()
    }
}

start()