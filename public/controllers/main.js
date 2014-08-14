/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('MyApp');

    app.controller('MainController', ['$scope', 'Job', function ($scope, Job) {

        // todo move All out of here and have it's on button to clear out queries
        $scope.statuss = ['A', 'B', 'H', 'W'];

        $scope.importances = ['1', '2', '3', '4', '5'];

        $scope.headingTitle = 'All users jobs';

        $scope.query = '';

        $scope.filterByStatus = function (status) {
            $scope.sublist = status;
            $scope.headingTitle = 'Only users jobs with status ' + status;
        };

        $scope.filterByImportance = function (importance) {
            $scope.subImport = importance;
            $scope.headingTitle = 'Only users jobs with importance ' + importance;
        };

        $scope.noFilter = function () {
            $scope.subImport = '';
            $scope.sublist = '';
            $scope.headingTitle = 'All jobs';
        };
    }]);
})();