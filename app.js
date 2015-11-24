var express = require('express');
var app = express();

app.set('view engine', 'html');

app.use(express.static("public"));
app.use(express.static("views"));

function wwwRedirect(req, res, next) {
    if (req.headers.host.slice(0, 4) === 'www.') {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
}

app.set('trust proxy', true);
app.use(wwwRedirect);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

var port = process.env.PORT || '3000';

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening on " + host + " " + port);
});