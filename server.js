//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');
var bodyParser = require('body-parser');

var jobs_hdlr = require('./public/handlers/jobs.js');
/*var persons_hdlr = require('./public/handlers/persons.js');
var user_hdle = require('./public/handlers/user.js');*/

/*
app.get('/jobs/user/:user', jobs_hdlr.get_users_jobs);
app.get('/api/shows', function(req, res, next) {
*/

app.get('/jobs/user/:user', jobs_hdlr.get_users_jobs);

app.set('port', process.env.PORT || config.PORT);

app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'));

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

/*
 todo work out if I need this
app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});*/