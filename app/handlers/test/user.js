/**
 * Created by hamishdickson on 08/07/2014.
 */

var async = require('async'),
    helpers = require('./helpers.js'),
    jobs = require('./jobs.js'),
    person = require('./persons.js');

function User (person, jobs) {
    this.bob = "test";
//    this.person = persons_hdlr.get_persons;
    //this.jobs = jobs_hdlr.get_users_jobs;
    this.person = person;
    this.jobs = jobs;
    //this.jiras = jira_hdlr.get_users_jira;
}

User.prototype.person = null;
User.prototype.jobs = null;
//User.prototype.jiras = null;

exports.get_users = function(req, res) {

    var user_jobs = {},
        user_person = {};

    async.waterfall([
        function(cb) {
            jobs.get_cb_users_jobs(req, function(err, result) {
                if (err) {
                    cb(err);
                } else {
                    user_jobs = result.data.jobs;
                    cb(null);
                }
            });
        },
        function(cb) {
            person.get_cb_persons(req, function (err, result) {
                if (err) {
                    cb(err);
                } else {
                    user_person = result.data;
                    cb(null);
                }
            })
        }
    ],
        function(err) {
            if (err) {
                console.log("eh oh .. " + err.message);
                helpers.send_failure(res, err);
            } else {
                var user_data = new User(user_person, user_jobs);
                helpers.send_success(res, { user: user_data });
            }
        }

    );
};