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
    exports.notes_path = "/jobs3/jobtest/jobNotes/";
    exports.deliverables_path_for_user = "/jobs3/jobtest/deliverables/user/";
    exports.deliverables_path_for_job = "/jobs3/jobtest/deliverables/job/";

    // todo find a test alternative
    exports.jira_rest_host = "192.168.1.5";
    exports.jira_users_jiras_path = "/jobs3/jobtest/person/";
} else {
    exports.jobs_users_jobs_path = "/jobs3/job/user/";
    exports.jobs_specific_job_path = "/jobs3/job/";
    exports.jobs_users_jobs_for_status_path = "/jobs3/job/user/";
    exports.persons_persons_path = "/jobs3/person/";
    exports.notes_path = "/jobs3/jobNotes/";
    exports.deliverables_path_for_user = "/jobs3/deliverables/user/";
    exports.deliverables_path_for_job = "/jobs3/deliverables/query?jobNumber=";
    exports.jira_rest_host = "jira.jhc.co.uk";
    exports.jira_users_jiras_path = "/rest/api/2/search?jql=assignee=";
}
