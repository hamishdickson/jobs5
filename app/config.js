//
// HWD
//


//
// jobs5
//
exports.PORT = 3000;

//
// REST api
//
exports.jobs_rest_port = 8070;

// jira
exports.jira_rest_host = "jira.jhc.co.uk";

// default to live server
exports.jobs_rest_host = "172.24.24.217";

exports.LEVEL = 'DEV';

/*
 * overrides level
 */

if (exports.LEVEL == 'DEV') {
    exports.jobs_rest_host = "192.168.1.5";
    exports.jobs_users_jobs_path = "/jobs3/jobtest/user/";
    exports.jobs_specific_job_path = "/jobs3/jobtest/";
    exports.jobs_users_jobs_for_status_path = "/jobs3/jobtest/user/";
    exports.persons_persons_path = "/jobs3/jobtest/person/";
} else {
    exports.jobs_users_jobs_path = "/jobs3/user/";
    exports.jobs_specific_job_path = "/jobs3/";
    exports.jobs_users_jobs_for_status_path = "/jobs3/user/";
    exports.persons_persons_path = "/jobs3/person/";

}
