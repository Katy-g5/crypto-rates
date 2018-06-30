const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send(`Time: ${new Date()}`)
})

app.use(express.static(path.join(__dirname, 'client')));

module.exports = app;
