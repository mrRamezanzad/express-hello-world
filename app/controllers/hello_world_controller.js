const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send()
})

app.get('/users', (req, res) => {
    res.status(201).send('users updated')
})

module.exports = app
