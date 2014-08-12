/**
 * Created by hamishdickson on 10/08/2014.
 */

(function () {
    var app = angular.module('MyApp');
    app.directive('jobNotes', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/job-notes.html'
        };
    });

    app.directive('jobSummary', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-summary.html'
        };
    });

    app.directive('jobsStatus', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-status.html'
        };
    });

    app.directive('jobsBilling', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-billing.html'
        };
    });
})();