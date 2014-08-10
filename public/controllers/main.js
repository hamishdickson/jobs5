/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('MainController', ['$scope', 'Job', function ($scope, Job) {

        $scope.statuss = ['A', 'B', 'Z', 'H', 'W'];

        $scope.headingTitle = 'All Jobs';

        $scope.query = '';

        $scope.jobs = Job.query();

        $scope.filterByStatus = function (status) {
            $scope.jobs = Job.query({status: status});
            $scope.headingTitle = 'at status ' + status;
        }
    }]);
})();