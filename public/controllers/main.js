/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('main-controller', ['job-controller']);

    app.controller('MainController', ['$scope', function ($scope) {

        $scope.statuss = ['A', 'B', 'C', 'I', 'H', 'W'];

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

        $scope.filterByClient = function (client) {
            $scope.subClient = client;
            $scope.headingTitle = 'Only users jobs with client ' + client;
        };

        $scope.noFilter = function () {
            $scope.subImport = '';
            $scope.sublist = '';
            $scope.subClient = '';
            $scope.headingTitle = 'All jobs';
        };

        $scope.tooltipSearch = {
            "title": "Use me to search jobs"
        };
    }]);
})();