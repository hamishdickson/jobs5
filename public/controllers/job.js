/**
 * Created by hamishdickson on 31/07/2014.
 *
 * Gets the jobs for a user and sorts out the job notes
 */

(function () {
    var app = angular.module('job-controller', []);

    app.controller('JobsController', ['$http', '$rootScope', '$alert', 'HOSTING_CONFIG', '$scope',
        function ($http, $rootScope, $alert, HOSTING_CONFIG, $scope) {

            var job = this;

            job.jobsData = [];

            var host = HOSTING_CONFIG.JOBS_REST_HOST;
            var port = HOSTING_CONFIG.JOBS_REST_PORT;
            var path = HOSTING_CONFIG.JOBS_USERS_JOBS_PATH;

            var url = 'http://' + host + ':' + port + path;

            var statusss = [];
            var importancess = [];
            var clients = [];

            if ($rootScope.currentUser) {
                $http.get(url + $rootScope.currentUser.initials)
                    .success(function (data) {
                        job.jobsData = data.jobs;

                        for (i = 0; i < job.jobsData.length; i++) {
                            job.jobsData[i].notes = job.jobsData[i].notes.split('\n');

                            if (statusss.indexOf(job.jobsData[i].status) == -1) {
                                statusss.push(job.jobsData[i].status);
                            }

                            if (importancess.indexOf(job.jobsData[i].importance) == -1) {
                                importancess.push(job.jobsData[i].importance);
                            }
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

            this.getStatuss = function () {
                return statusss;
            };

            this.getImportances = function () {
                return importancess;
            };
        }]);

})();