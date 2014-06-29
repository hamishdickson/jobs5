//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var config = require('./config.js');

var page_hdlr = require('./handlers/pages.js');
var helpers = require('./handlers/helpers.js');
var jobs_hdlr = require('./handlers/jobs.js');
var jira_hdlr = require('./handlers/jira.js');

app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(__dirname + "/../static"));

app.get('/pages/:page_name', page_hdlr.generate);
app.get('/pages/:page_name/:sub_page', page_hdlr.generate);

app.get('/jobs/test', jobs_hdlr.get_test_jobs);
app.get('/jobs/user/:user', jobs_hdlr.get_users_jobs);
app.get('/jobs/user/:user/:status', jobs_hdlr.get_users_jobs_for_status);

app.get('/jira/test', jira_hdlr.get_test_jira);
app.get('/jira/user/:user', jira_hdlr.get_users_jira);

app.get("/", function (req, res) {
	res.redirect("/pages/home");
	res.end();
});

app.get("/jobs5", function (req, res) {
	res.redirect("/pages/home");
	res.end();
});

app.get('*', four_oh_four);

function four_oh_four(req, res) {
    res.writeHead(404, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(helpers.invalid_resource()) + "\n");
}

console.log("Starting up server - port " + config.PORT);
app.listen(config.PORT);
