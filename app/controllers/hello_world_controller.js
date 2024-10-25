const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello there 1')
})

module.exports = app
