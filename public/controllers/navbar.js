/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('NavbarCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.logout = function () {
            Auth.logout();
        };
    }]);
})();