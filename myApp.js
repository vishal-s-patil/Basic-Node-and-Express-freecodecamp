const express = require("express");
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, '/public')));

myLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${req.ip}`);
    next();
}

app.use(myLogger);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', (req, res) => {
    let obj = {
        "message": "Hello json"
    };
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        obj.message = obj.message.toUpperCase();
    }
    res.json(obj);
})
































module.exports = app;
