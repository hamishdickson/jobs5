/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('detail-controller', []);

    app.controller('DetailController', ['$scope', '$rootScope', '$routeParams', '$http', 'HOSTING_CONFIG',
        function ($scope, $rootScope, $routeParams, $http, HOSTING_CONFIG) {

            var host = HOSTING_CONFIG.JOBS_REST_HOST;
            var port = HOSTING_CONFIG.JOBS_REST_PORT;
            var path = HOSTING_CONFIG.JOBS_SPECIFIC_JOB_PATH;

            var url = 'http://' + host + ':' + port + path;

            $scope.jobNumber = $routeParams.id;

            $http.get(url + $scope.jobNumber).success(function (data) {
                $scope.jobDetails = data;
                $scope.jobDetails.notes = $scope.jobDetails.notes.split('\n');
            });

        }]);
})();
