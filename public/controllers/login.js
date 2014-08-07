/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.login = function () {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);
})();