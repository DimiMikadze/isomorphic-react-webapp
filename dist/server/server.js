'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('../../node_modules/react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('../shared/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/../../static/views");

app.use(_express2.default.static("static"));
app.use(_express2.default.static("dist"));

app.get('/sitemap.xml', function (req, res) {
    res.render('sitemap.xml');
});

app.get('*', function (req, res) {

    (0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (err, redirectLocation, props) {

        if (req.headers.host.match(/^www/) !== null) {
            res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
        } else if (err) {
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
            var content = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, props));
            res.render('index', { content: content });
        } else {
            res.sendStatus(404);
        }
    });
});

var port = process.env.PORT || '3000';

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening on " + host + " " + port);
});