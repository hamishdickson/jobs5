/**
 * Created by hamishdickson on 04/02/2014.
 */

var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');
var config = require('./config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.set('port', process.env.PORT || config.PORT);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));
app.use(function(req, res, next) {
    if (req.user) {
        res.cookie('user', JSON.stringify(req.user));
    }
    next();
});

app.post('/api/login', function(req, res) {
    res.cookie('user', JSON.stringify(req.body.user));
    res.send(req.body.user);
});

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

/* todo this causes problems ... work out why
app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});
*/