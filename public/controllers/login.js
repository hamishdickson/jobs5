/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.directive('login', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/login.html',
            controller: function() {
                this.login = function(username) {
                    console.log(username);
                }
            },
            controllerAs: "loginCtrl"
        }
    });
})();