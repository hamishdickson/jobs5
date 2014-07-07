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
} else if (exports.LEVEL == 'TEST') {

} else {

}
