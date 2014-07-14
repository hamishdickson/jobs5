//
// 04/02/14 HWD Creation
//

var express = require('express');
var app = express();
var config = require('./config.js');

var page_hdlr = require('./handlers/pages.js');
var helpers = require('./handlers/helpers.js');
var jobs_hdlr = require('./handlers/jobs.js');
var persons_hdlr = require('./handlers/persons.js');
var jira_hdlr = require('./handlers/jira.js');
var user_hdlr = require('./handlers/user.js');
var dlv_hdlr = require('./handlers/deliverables.js');

app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true }));
app.use(express.static(__dirname + "/../static"));

// this will always be like this
app.get('/pages/:page_name', page_hdlr.generate);
app.get('/pages/:page_name/:sub_page', page_hdlr.generate);

// to be updated
app.get('/jobs/test/post', jobs_hdlr.post_job);

app.get('/jobs/number/:jobNumber', jobs_hdlr.get_specific_job);
app.get('/jobs/user/:user', jobs_hdlr.get_users_jobs);
app.get('/jobs/status/:user/:status', jobs_hdlr.get_users_jobs_for_status);
app.get('/jobs/notes/:jobNumber', jobs_hdlr.get_job_notes);

app.get('/persons/:person', persons_hdlr.get_persons);

app.get('/deliverables/user/:user', dlv_hdlr.get_deliverables_for_user);
app.get('/deliverables/job/:jobNumber', dlv_hdlr.get_deliverables_for_job);

app.get('/jira/user/:user', jira_hdlr.get_users_jiras);
//app.get('/jira/reference/:reference', jira_hdlr.get_specific_jira);

// the main event
app.get('/user/:user', user_hdlr.get_users);

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
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify(helpers.invalid_resource()) + "\n");
}

console.log("Starting up server - port " + config.PORT);
app.listen(config.PORT);
