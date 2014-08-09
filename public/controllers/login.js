/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.directive('login', ['$scope', 'Auth', function($scope, Auth) {
        return {
            restrict: 'E',
            templateUrl: '../views/login.html',
            controller: function() {
                $scope.login = function(username) {
                    Auth.login({
                        username: $scope.user
                    });
                    console.log(username);
                }
            },
            controllerAs: "loginCtrl"
        }
    }]);
})();