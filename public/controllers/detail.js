/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('DetailController', ['$scope', '$rootScope', '$routeParams', '$http',
        function ($scope, $rootScope, $routeParams, $http) {

            $scope.jobNumber = $routeParams.id;

            $http.get('http://localhost:8070/jobs3/jobtest/' + $scope.jobNumber).success(function (data) {
                $scope.jobDetails = data;
            });

        }]);
})();