/**
 * Created by hamishdickson on 19/07/2014.
 */
angular.module('MyApp')
    .controller('DetailController', ['$scope', '$rootScope', '$routeParams', '$http',
        function($scope, $rootScope, $routeParams, $http) {

            $scope.jobTitle = $routeParams.id;

            $http.get('http://localhost:8070/jobs3/jobtest/' + $scope.jobTitle).success(function (data) {
                $scope.jobDetails = data;
            });

            /*var job = this;

            job.jobsData = [];

            if (jobTitle) {
                $http.get('http://localhost:8070/jobs3/jobtest/' + jobTitle).success(function (data) {
                    job.jobsData = data.jobs;
                });
            }*/
    }]);