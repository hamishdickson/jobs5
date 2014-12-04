/**
 * Created by hamishdickson on 10/08/2014.
 */

(function () {
    var app = angular.module('config-module', []);

    app.constant('HOSTING_CONFIG', {
        JOBS_REST_PORT: 8070,
        JOBS_REST_HOST: "172.24.24.225",
        JOBS_USERS_JOBS_PATH: "/jobs3/job/user/",
        JOBS_SPECIFIC_JOB_PATH: "/jobs3/job/",
        JOBS_USERS_JOBS_FOR_STATUS_PATH: "/jobs3/job/user/",
        PERSONS_PERSONS_PATH: "/jobs3/person/",
        NOTES_PATH: "/jobs3/jobNotes/",
        DELIVERABLES_PATH_FOR_USER: "/jobs3/deliverables/user/",
        DELIVERABLES_PATH_FOR_JOB: "/jobs3/deliverables/job/"
    });

})();
