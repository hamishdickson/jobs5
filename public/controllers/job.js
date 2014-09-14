/**
 * Created by hamishdickson on 31/07/2014.
 *
 * Gets the jobs for a user and sorts out the job notes
 */

(function () {
    var app = angular.module('job-controller', []);

    app.controller('JobsController', ['$http', '$rootScope', '$alert',  function ($http, $rootScope, $alert) {

        var job = this;

        job.jobsData = [];

        var url = 'http://localhost:8070/jobs3/jobtest/user/';

        if ($rootScope.currentUser) {
            $http.get(url + $rootScope.currentUser.initials)
            //$http.get('http://172.24.24.217:8070/jobs3/job/user/' + $rootScope.currentUser.initials)
                .success(function (data) {
                    job.jobsData = data.jobs;

                    for(i = 0; i < job.jobsData.length; i++) {
                        job.jobsData[i].notes = job.jobsData[i].notes.split('\n');
                    }

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

})();