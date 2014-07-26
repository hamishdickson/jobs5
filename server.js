//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3070);

app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));

console.log("Starting up server - port 3071");

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});


app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
    res.end();
});