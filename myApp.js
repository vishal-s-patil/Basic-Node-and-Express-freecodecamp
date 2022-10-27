const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));

myLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${req.ip}`);
    next();
}

app.use(myLogger);

app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.json({ "time": req.time });
});

app.get('/:word/echo', (req, res) => {
    res.json({ "echo": req.params.word });
});

app.get('/name', (req, res) => {
    res.json({ "name": `${req.query.first} ${req.query.last}` });
});

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
