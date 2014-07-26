/**
 * Created by hamishdickson on 19/07/2014.
 */
angular.module('MyApp')
    .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    }]);