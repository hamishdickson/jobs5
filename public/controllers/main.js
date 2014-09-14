/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('main-controller', []);

    app.controller('MainController', ['$scope', function ($scope) {

        // todo move All out of here and have it's on button to clear out queries
        $scope.statuss = ['A', 'B', 'H', 'W'];

        $scope.importances = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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

        $scope.tooltipSearch = {
            "title": "Use me to search jobs"
        };
    }]);
})();