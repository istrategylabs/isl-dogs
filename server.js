const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static('static'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);