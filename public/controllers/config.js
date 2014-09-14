/**
 * Created by hamishdickson on 10/08/2014.
 */

(function () {
    var app = angular.module('config-module', []);

    app.constant('HOSTING_CONFIG', {
        JOBS_REST_PORT: 8070,
        JOBS_REST_HOST: "192.168.1.5",
        JOBS_USERS_JOBS_PATH: "/jobs3/jobtest/user/",
        JOBS_SPECIFIC_JOB_PATH: "/jobs3/jobtest/",
        JOBS_USERS_JOBS_FOR_STATUS_PATH: "/jobs3/jobtest/user/",
        PERSONS_PERSONS_PATH: "/jobs3/jobtest/person/",
        NOTES_PATH: "/jobs3/jobtest/jobNotes/",
        DELIVERABLES_PATH_FOR_USER: "/jobs3/jobtest/deliverables/user/",
        DELIVERABLES_PATH_FOR_JOB: "/jobs3/jobtest/deliverables/job/"
    });
/*
    app.controller('ConfigController', function() {

        var _LEVEL = 'DEV';
        this.JOBS_REST_PORT = 8070;

        if (_LEVEL == 'DEV') {
            this.JOBS_REST_HOST = "192.168.1.5";
            this.JOBS_USERS_JOBS_PATH = "/jobs3/jobtest/user/";
            this.JOBS_SPECIFIC_JOB_PATH = "/jobs3/jobtest/";
            this.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/jobtest/user/";
            this.PERSONS_PERSONS_PATH = "/jobs3/jobtest/person/";
            this.NOTES_PATH = "/jobs3/jobtest/jobNotes/";
            this.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/user/";
            this.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/job/";
        } else {
            this.JOBS_REST_HOST = "172.24.24.217";
            this.JOBS_USERS_JOBS_PATH = "/jobs3/job/user/";
            this.JOBS_SPECIFIC_JOB_PATH = "/jobs3/job/";
            this.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/job/user/";
            this.PERSONS_PERSONS_PATH = "/jobs3/person/";
            this.NOTES_PATH = "/jobs3/jobNotes/";
            this.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/user/";
            this.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/query?jobNumber=";
            this.JIRA_REST_HOST = "jira.jhc.co.uk";
            this.JIRA_USERS_JIRAS_PATH = "/rest/api/2/search?jql=assignee=";
        }
    });*/

})();
