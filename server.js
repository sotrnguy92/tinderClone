import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/dbCards.js'
import cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:3lAgJSbJ1ZmOSnZo@cluster0.xxbuh.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(cors())

// DB Configs
 mongoose.connect(connection_url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}, error => console.error(error))

// API endpoints
app.get('/', (req, res) => {
    res.status(200)
    res.send("HELLO CLEVER PROGRAMMER!!!")
} )

app.post('/tinder/cards', ((req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}))

app.get('/tinder/cards', ((req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}))

// Listener
app.listen(port, () => console.log(`listening on port ${port}`))