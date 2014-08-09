/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('DetailController', ['$scope', '$rootScope', '$routeParams', '$http',
        function ($scope, $rootScope, $routeParams, $http) {

            $scope.jobTitle = $routeParams.id;

            $http.get('http://localhost:8070/jobs3/jobtest/' + $scope.jobTitle).success(function (data) {
                $scope.jobDetails = data;
            });

        }]);
})();