const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(202).send()
})

app.get('/users', (req, res) => {
    res.status(201).send('users')
})

module.exports = app
