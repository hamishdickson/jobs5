/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('MainController', ['$scope', 'Job', function ($scope, Job) {

        $scope.statuss = ['All', 'A', 'B', 'H', 'W'];

        $scope.headingTitle = 'All users jobs';

        $scope.query = '';

        $scope.filterByStatus = function (status) {
            if (status == 'All') {
                $scope.sublist = '';
                $scope.headingTitle = 'All users jobs';
            } else {
                $scope.sublist = status;
                $scope.headingTitle = 'Only users jobs with status ' + status;
            }

        }
    }]);
})();