/**
 * Created by hamishdickson on 31/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('JobsController', ['$http', '$rootScope', function ($http, $rootScope) {
        var job = this;

        job.jobsData = [];

        if ($rootScope.currentUser) {
            $http.get('http://localhost:8070/jobs3/jobtest/user/' + $rootScope.currentUser.initials)
                .success(function (data) {
                    job.jobsData = data.jobs;
                })
                .error(function () {
                    $alert({
                        title: 'Error!',
                        content: 'Problem communicating with server!',
                        placement: 'top-right',
                        type: 'danger',
                        duration: 3
                    });
                });
        }
    }]);

    app.controller('NotesController', ['$rootScope', function ($rootScope) {

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            this.note.author = $rootScope.currentUser.name;

            /* todo replace this with a post to the jobs system */
            job.notes.push(this.note);

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