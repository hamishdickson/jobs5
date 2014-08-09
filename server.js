//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.cookie('user', JSON.stringify(req.user));
    res.send(req.user);
});

passport.use(new LocalStrategy(
    function(username, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            return done(null, user);
        });
    }
));

app.set('port', process.env.PORT || config.PORT);

app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(path.join(__dirname, 'public')));

console.log("Starting up server - port " + config.PORT);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

/* todo this causes problems ... work out why
app.get("*", function (req, res) {
    res.redirect('/#' + req.originalUrl);
});
*/

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.send(401);
}
