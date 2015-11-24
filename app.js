var express = require('express');
var app = express();

app.set('view engine', 'html');

app.use(express.static("public"));
app.use(express.static("views"));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

var port = process.env.PORT || '3000';

app.listen(port);