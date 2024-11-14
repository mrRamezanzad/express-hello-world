const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello 3')
})

app.get('/users', (req, res) => {
    res.status(201).send('v0.0.0.1')
})

module.exports = app
