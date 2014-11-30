/**
 * HWD - config for jobs 5
 */

exports.PORT = 3070;

exports.JOBS_REST_PORT = 8070;

exports.JIRA_REST_HOST = "jira.jhc.co.uk";

// default to live server
exports.JOBS_REST_HOST = "172.24.24.217";

exports.LEVEL = 'DEV';

/*
 * overrides level
 */
if (exports.LEVEL == 'DEV') {
    exports.JOBS_REST_HOST = "192.168.1.4";
    exports.JOBS_USERS_JOBS_PATH = "/jobs3/jobtest/user/";
    exports.JOBS_SPECIFIC_JOB_PATH = "/jobs3/jobtest/";
    exports.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/jobtest/user/";
    exports.PERSONS_PERSONS_PATH = "/jobs3/jobtest/person/";
    exports.NOTES_PATH = "/jobs3/jobtest/jobNotes/";
    exports.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/user/";
    exports.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/job/";

    // todo find a test alternative
    exports.JIRA_REST_HOST = "192.168.1.5";
    exports.JIRA_USERS_JIRAS_PATH = "/jobs3/jobtest/person/";
} else {
    exports.JOBS_USERS_JOBS_PATH = "/jobs3/job/user/";
    exports.JOBS_SPECIFIC_JOB_PATH = "/jobs3/job/";
    exports.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/job/user/";
    exports.PERSONS_PERSONS_PATH = "/jobs3/person/";
    exports.NOTES_PATH = "/jobs3/jobNotes/";
    exports.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/user/";
    exports.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/query?jobNumber=";
    exports.JIRA_REST_HOST = "jira.jhc.co.uk";
    exports.JIRA_USERS_JIRAS_PATH = "/rest/api/2/search?jql=assignee=";
}
