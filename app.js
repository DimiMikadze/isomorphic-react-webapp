var express = require('express');
var app = express();

app.set('view engine', 'html');

app.use(express.static("public"));
app.use(express.static("views"));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});