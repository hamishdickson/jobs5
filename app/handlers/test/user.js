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

User.prototype.response_obj = function () {
    return { //person: this.person,
        jobs: this.jobs };
};

exports.get_users = function(req, res) {

    var user_jobs = {},
        user_person = {};

    async.waterfall([
        function(cb) {
            jobs.get_cb_users_jobs(req, function(err, result) {
                if (err) {
                    //handle the error
                    console.log("eh oh .. " + err.message);
                } else {
                    //do whatever you want with the result
                    //helpers.send_success(res, { user: result });
                    user_jobs = result.data.jobs;
                    cb(null);
                }
            });
        },
        function(cb) {
            person.get_cb_persons(req, function (err, result) {
                if (err) {
                    //handle the error
                    console.log("eh oh .. " + err.message);
                } else {
                    //do whatever you want with the result
                    //helpers.send_success(res, { user: result });
                    user_person = result.data;
                    cb(null);
                }
            })
        }
    ],
        function(err) {
            var user_data = new User(user_person, user_jobs);

            helpers.send_success(res, { user: user_data});
        }

    );
};