/**
 * Created by hamishdickson on 10/08/2014.
 */

(function () {
    var app = angular.module('tabs-controller', []);

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

    app.directive('jobsBilling', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-billing.html'
        };
    });
})();