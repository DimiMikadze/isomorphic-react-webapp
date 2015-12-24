var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.static("views"));

app.get('*', function(req, res) {
    if (req.headers.host.match(/^www/) !== null ) {
        res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
    } else {
        res.render(__dirname + '/views/index');
    }
});

var port = process.env.PORT || '3000';

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening on " + host + " " + port);
});