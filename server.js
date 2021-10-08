import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:3lAgJSbJ1ZmOSnZo@cluster0.xxbuh.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

// DB Configs
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, error => "hello")

// API endpoints
app.get('/', (req, res) => {
    res.status(200)
    res.send("HELLO CLEVER PROGRAMMER!!!")
} )


// Listener
app.listen(port, () => console.log(`listening on port ${port}`))