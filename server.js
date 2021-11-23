const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();

// Import routes from respective files
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');

// Initialize Middleware
app.use(express.json()); // allow json data
app.use(express.urlencoded()); // allow url encoded data

app.use((req, res, next) => {
    console.log(req.url + ' ' + req.method + ' ' + req.header('Authorization'));
    next();
})

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(`${MONGODB_URI}`)
.then(() => {
    console.log('MongoDB Connected...')
    app.listen(PORT, () => {
        console.log('Server started on PORT 5000');
    });
})
.catch(err => {
    console.error(err.message);
})