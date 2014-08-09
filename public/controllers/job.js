/**
 * Created by hamishdickson on 31/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('JobsController', ['$http', '$rootScope', function ($http, $rootScope) {
        var job = this;

        job.jobsData = [];

        if ($rootScope.currentUser) {
            $http.get('http://localhost:8070/jobs3/jobtest/user/' + $rootScope.currentUser).success(function (data) {
                job.jobsData = data.jobs;
            });
        }
    }]);

    app.controller('NotesController', function () {
        this.note = notesTest;

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            job.notes.push(this.note);
            job.response = this.note.response;
            this.note = {};
        };
    });

    var notesTest = [
        {"jobNumber": 123456, "body": "well, here we go", "response": "Not one for a while", "author": "me@domain"}
    ];

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

    app.directive('jobTabs', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-tabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                }
            },
            controllerAs: 'tabCtrl'
        };
    });
})();