//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || config.PORT);

app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(path.join(__dirname, 'public')));

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});
