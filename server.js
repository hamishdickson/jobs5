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
var http = require('http');
var compress = require('compression');

app.set('port', process.env.PORT || config.PORT);
app.use(compress())
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

app.post('/api/login', function(req, response) {

    // ok, so let's verify this is a real person

    var options = {
        host: config.JOBS_REST_HOST,
        port: config.JOBS_REST_PORT,
        path: config.PERSONS_PERSONS_PATH + req.body.user,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(options, function(res) {
        var output = "";

        res.setEncoding('utf-8');

        res.on('data', function(chunk) {
            output += chunk;
        });

        res.on('end', function() {
            if (output !== "") {
                var obj = JSON.parse(output);

                if (!isEmpty(obj)) {
                    response.cookie('user', JSON.stringify(obj));
                    response.send(obj);
                } else {
                    response.send(404);
                }
            } else {
                response.send(500);
            }
        });
    });

    reqGet.end();
    reqGet.on('error', function(err){
        response.send(err);
    });
});

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});

var isEmpty = function(inObj) {
    return Object.keys(inObj).length === 0;
};