let express = require('express');
let app = express();
require('dotenv').config();

// app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', (req, res) => {
    let obj = { "message": "Hello json" };
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        obj.message = obj.message.toUpperCase();
    }
    res.json(obj);
})
































module.exports = app;
