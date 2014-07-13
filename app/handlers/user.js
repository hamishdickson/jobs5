/**
 * Created by hamishdickson on 08/07/2014.
 */

var async = require('async'),
    helpers = require('./helpers.js'),
    jobs = require('./jobs.js'),
    person = require('./persons.js'),
    deliverables = require('./deliverables.js');

function User (person, zJobs, hJobs, wJobs, deliverables) {
    this.person = person;
    this.zJobs = zJobs;
    this.hJobs = hJobs;
    this.wJobs = wJobs;
    this.allDeliverables = deliverables;
    this.totalJobs = zJobs.length + hJobs.length + wJobs.length;
    this.zJobsPercentage = (zJobs.length / this.totalJobs) * 100;
    this.hJobsPercentage = (hJobs.length / this.totalJobs) * 100;
    this.wJobsPercentage = (wJobs.length / this.totalJobs) * 100;

    var today = new Date();
    var todayIso8 = today.yyyymmdd();

    var in7Days = new Date();
    in7Days.setDate(today.getDate() + 7);
    var in7DaysIso8 = in7Days.yyyymmdd();

    this.pastCount = 0;
    this.presentCount = 0;
    this.futureCount = 0;
    this.futureCount7 = 0;

    for (i = 0; i < this.allDeliverables.length; i++) {
        if (this.allDeliverables[i].promisedDate != 0 && this.allDeliverables[i].promisedDate < todayIso8) {
            this.pastCount++;
        } else if (this.allDeliverables[i].promisedDate == todayIso8) {
            this.presentCount++;
        } else if (this.allDeliverables[i].promisedDate < in7DaysIso8) {
            this.futureCount7++
        }
    }

    this.futureCount = this.allDeliverables.length - this.pastCount - this.presentCount;

    this.pastDeliverablesPercentage = (this.pastCount / this.allDeliverables.length) * 100;
    this.presentDeliverablesPercentage = (this.presentCount / this.allDeliverables.length) * 100;
    this.futureDeliverablesPercentage = (this.futureCount / this.allDeliverables.length) * 100;

    //this.jiras = jira_hdlr.get_users_jira;
}

// some date handling
Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
    return parseInt(yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0])); // padding
};

User.prototype.person = null;
User.prototype.zJobs = null;
User.prototype.hJobs = null;
User.prototype.wJobs = null;
User.prototype.allDeliverables = null;
User.prototype.totalJobs = 0;
User.prototype.pastDeliverablesPercentage = null;

//User.prototype.jiras = null;

exports.get_users = function(req, res) {

    var user_jobs_z = {},
        user_jobs_h = {},
        user_jobs_w = {},
        user_person = {},
        user_deliverables = {};

    async.parallel([
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
                deliverables.get_cb_deliverables_for_user(req, function(err, result) {
                    if (err) {
                        cb(err);
                    } else {
                        user_deliverables = result.data;
                        cb(null);
                    }
                });
            },
        function(cb) {
            req.params.person = req.params.user;
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
                var user_data = new User(user_person, user_jobs_z, user_jobs_h, user_jobs_w, user_deliverables);
                helpers.send_success(res, { user: user_data });
            }
        }

    );
};