//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');

app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(__dirname + "/../static"));

app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
    res.end();
});

console.log("Starting up server - port 3071");
app.listen(3071);
