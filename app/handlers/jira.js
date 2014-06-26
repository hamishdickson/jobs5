var jira = require('./jira-api');

var options = {
    config: {
        "username": "dicksonh",
        "passowrd": "Pi3adaei",
        "host": "https://jira.jhc.co.uk"
    },
    issueIdOrKey: "JOBS-39"
};

jira.issue.get(options, function(response) {
    console.log(JSON.stringify(response, null, 4));
});
