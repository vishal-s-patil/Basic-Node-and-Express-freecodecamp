let express = require('express');
let app = express();

// app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
































module.exports = app;
