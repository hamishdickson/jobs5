/**
 * Created by hamishdickson on 31/07/2014.
 */
/*angular.module('MyApp')*/

(function () {
    var app = angular.module('MyApp');

    app.controller('JobsController', ['$http', function ($http) {
        var job = this;

        job.jobsData = [];

        $http.get('http://localhost:8070/jobs3/jobtest/user/hd').success(function (data) {
            job.jobsData = data.jobs;
        });
    }]);

    app.controller('NotesController', ['$http', function ($http) {
        var notes = this;

        notes.note = [];

        $http.get('http://localhost:8070/jobs3/jobtest/jobNotes/12').success(function (data) {
            notes = data;
        });

        //this.note = {};

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            job.notes.push(this.note);
            job.response = this.note.response;
            this.note = {};
        };
    }]);

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