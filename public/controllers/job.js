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

})();