var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.render(__dirname + '/views/me', { title: 'Me' });
});

app.get('/work', function(req, res) {
    res.render(__dirname + '/views/work', { title: 'Work' });
});

app.get('/skills', function(req, res) {
    res.render(__dirname + '/views/skills', { title : 'Skills' });
});

app.get('*', function(req, res) {
    res.redirect('/');
});

var port = process.env.PORT || '3000';

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening on " + host + " " + port);
});