/**
 * Created by hamishdickson on 31/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('JobsController', ['$http', '$rootScope', '$alert', function ($http, $rootScope, $alert) {
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
                        content: 'Oh dear - there was some kind of server error - give Hamish a yell',
                        placement: 'top-right',
                        type: 'danger',
                        duration: 3
                    });
                });
        }
    }]);

    app.controller('NotesController', ['$rootScope', '$http', '$alert', function ($rootScope, $http, $alert) {

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            this.note.author = $rootScope.currentUser.name;

            this.note.jobNumber = job.jobTitle;

            if (this.note.body) {
                var input = {
                    "jobNumber": job.jobNumber,
                    "note": this.note.body,
                    "softwarePackage": 0
                };

                $http.post('http://localhost:8070/jobs3/jobtest/jobNotes', input)
                    .success(function () {
                        $alert({
                            title: 'Nice!',
                            content: "You've updated the job notes.",
                            placement: 'top-right',
                            type: 'success',
                            duration: 3
                        });
                    })
                    .error(function () {
                        $alert({
                            title: 'Error!',
                            content: 'There was a problem talking to the server!',
                            placement: 'top-right',
                            type: 'danger',
                            duration: 30
                        });
                    });
            }

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