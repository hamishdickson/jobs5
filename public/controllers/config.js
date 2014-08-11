/**
 * Created by hamishdickson on 10/08/2014.
 */

(function () {
    var app = angular.module('config-module', []);

    app.controller('ConfigController', ['$scope', function($scope) {

        var _LEVEL = 'TEST';
        $scope.JOBS_REST_PORT = 8070;

        if (_LEVEL == 'DEV') {
            $scope.JOBS_REST_HOST = "192.168.1.10";
            $scope.JOBS_USERS_JOBS_PATH = "/jobs3/jobtest/user/";
            $scope.JOBS_SPECIFIC_JOB_PATH = "/jobs3/jobtest/";
            $scope.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/jobtest/user/";
            $scope.PERSONS_PERSONS_PATH = "/jobs3/jobtest/person/";
            $scope.NOTES_PATH = "/jobs3/jobtest/jobNotes/";
            $scope.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/user/";
            $scope.DELIVERABLES_PATH_FOR_USER = "/jobs3/jobtest/deliverables/job/";
        } else {
            $scopeJOBS_REST_HOST = "172.24.24.217";
            $scope.JOBS_USERS_JOBS_PATH = "/jobs3/job/user/";
            $scope.JOBS_SPECIFIC_JOB_PATH = "/jobs3/job/";
            $scope.JOBS_USERS_JOBS_FOR_STATUS_PATH = "/jobs3/job/user/";
            $scope.PERSONS_PERSONS_PATH = "/jobs3/person/";
            $scope.NOTES_PATH = "/jobs3/jobNotes/";
            $scope.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/user/";
            $scope.DELIVERABLES_PATH_FOR_USER = "/jobs3/deliverables/query?jobNumber=";
            $scope.JIRA_REST_HOST = "jira.jhc.co.uk";
            $scope.JIRA_USERS_JIRAS_PATH = "/rest/api/2/search?jql=assignee=";
        }
    }]);

})();
