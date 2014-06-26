var jira = require('./jira-api');

var options = {
    config: {
        "username": "username",
        "password": "password",
        "host": "https://jira.jhc.co.uk"
    },
    issueIdOrKey: "JOBS-39"
};

jira.issue.get(options, function(response) {
    console.log(JSON.stringify(response, null, 4));
});
