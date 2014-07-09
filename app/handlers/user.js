/**
 * Created by hamishdickson on 08/07/2014.
 */

var async = require('async'),
    helpers = require('./helpers.js'),
    jobs = require('./jobs.js'),
    person = require('./persons.js');

function User (person, zJobs, hJobs, wJobs) {
    this.person = person;
    this.zJobs = zJobs;
    this.hJobs = hJobs;
    this.wJobs = wJobs;
    this.totalJobs = zJobs.length + hJobs.length + wJobs.length;
    this.zJobsPercentage = (zJobs.length / this.totalJobs) * 100;
    this.hJobsPercentage = (zJobs.length / this.totalJobs) * 100;
    this.wJobsPercentage = (zJobs.length / this.totalJobs) * 100;
    //this.jiras = jira_hdlr.get_users_jira;
}

User.prototype.person = null;
User.prototype.zJobs = null;
User.prototype.hJobs = null;
User.prototype.wJobs = null;
User.prototype.totalJobs = 0;

//User.prototype.jiras = null;

exports.get_users = function(req, res) {

    var user_jobs_z = {},
        user_jobs_h = {},
        user_jobs_w = {},
        user_person = {};

    async.waterfall([
/*        function(cb) {
            jobs.get_cb_users_jobs(req, function(err, result) {
                if (err) {
                    cb(err);
                } else {
                    user_jobs = result.data.jobs;
                    cb(null);
                }
            });
        },*/
            function(cb) {
                req.params.status = 'z';
                jobs.get_cb_users_jobs_for_status(req, function(err, result) {
                    if (err) {
                        cb(err);
                    } else {
                        user_jobs_z = result.data.jobs;
                        cb(null);
                    }
                });
            },
            function(cb) {
                req.params.status = 'h';
                jobs.get_cb_users_jobs_for_status(req, function(err, result) {
                    if (err) {
                        cb(err);
                    } else {
                        user_jobs_h = result.data.jobs;
                        cb(null);
                    }
                });
            },
            function(cb) {
                req.params.status = 'w';
                jobs.get_cb_users_jobs_for_status(req, function(err, result) {
                    if (err) {
                        cb(err);
                    } else {
                        user_jobs_w = result.data.jobs;
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
                var user_data = new User(user_person, user_jobs_z, user_jobs_h, user_jobs_w);
                helpers.send_success(res, { user: user_data });
            }
        }

    );
};