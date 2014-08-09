/**
 * Created by hamishdickson on 19/07/2014.
 */
angular.module('MyApp')
    .controller('DetailController', ['$scope', '$rootScope', '$routeParams',
        function($scope, $rootScope, $routeParams, Job) {

            Job.get({ _id: $routeParams.id }, function(job) {
                $scope.job = job;
            });
        }]);
