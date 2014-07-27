//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

var jobs_hdlr = require('./public/handlers/jobs.js');
var persons_hdlr = require('./public/handlers/persons.js');
var user_hdle = require('./public/handlers/user.js');

app.get('/jobs/user/:user', jobs_hdlr.get_cb_users_jobs);

app.set('port', process.env.PORT || config.PORT);

app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
    res.end();
});