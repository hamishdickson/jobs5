/**
 * Created by hamishdickson on 08/07/2014.
 */

var async = require('async'),
    helpers = require('./helpers.js'),
    jobs = require('./jobs.js');

function User (user_data) {
    this.person = persons_hdlr.get_persons;
    this.jobs = jobs_hdlr.get_users_jobs_for_status;
    //this.jiras = jira_hdlr.get_users_jira;
}

User.prototype.person = null;
User.prototype.jobs = null;
//User.prototype.jiras = null;

User.prototype.response_obj = function () {
    return { person: this.person,
        jobs: this.jobs };
};

exports.get_users = function(req, res) {
    async.waterfall([
        function (cb) {
            //req.param.user = 'HD';
            //var user_data = jobs.get_users_jobs(req);
            //cb(user_data);
            cb(helpers.error("no_such_user",
                "The specified user does not exist"));
        }
    ], function(err, results) {
        if (err) {
            helpers.send_failure(res, err);
        } else if (!results) {
            helpers.send_failure(results, helpers.no_such_user);
        } else {
            var u = new User(user_data);
            helpers.send_success(results, { user: u.responce_obj() });
        }
    });
};