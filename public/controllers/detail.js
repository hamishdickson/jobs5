/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('detail-controller', []);

    app.controller('DetailController', ['$scope', '$rootScope', '$routeParams', '$http',
        function ($scope, $rootScope, $routeParams, $http) {

            $scope.jobNumber = $routeParams.id;

            //$http.get('http://localhost:8070/jobs3/jobtest/' + $scope.jobNumber).success(function (data) {
            $http.get('http://172.24.24.217:8070/jobs3/job/' + $scope.jobNumber).success(function (data) {
                $scope.jobDetails = data;
            });

        }]);
})();