/**
 * Created by hamishdickson on 19/07/2014.
 */

(function () {
    var app = angular.module('main-controller', ['job-controller']);

    app.controller('MainController', ['$scope', function ($scope) {

        $scope.statuss = ['A', 'B', 'C', 'I', 'H', 'W'];

        $scope.importances = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        $scope.headingTitle = 'All jobs';

        $scope.query = '';

        $scope.filterByStatus = function (status) {
            $scope.sublist = status;

            if ($scope.headingTitle == '') {
                $scope.headingTitle = 'Only users jobs with status ' + status;
            } else {
                $scope.headingTitle += ' and status ' + status;
            }
        };

        $scope.filterByImportance = function (importance) {
            $scope.subImport = importance;

            if ($scope.headingTitle == '') {
                $scope.headingTitle = 'Only users jobs with priority ' + importance;
            } else {
                $scope.headingTitle += ' and priority ' + importance;
            }
        };

        $scope.filterByClient = function (client) {
            $scope.subClient = client;

            if ($scope.headingTitle == '') {
                $scope.headingTitle = 'Only users jobs with client ' + client;
            } else {
                $scope.headingTitle += ' and client ' + client;
            }
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