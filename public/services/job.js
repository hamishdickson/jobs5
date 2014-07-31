/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    angular.module('MyApp')
        .factory('Job', ['$resource', function ($resource) {
            return $resource('/jobs/user/:_id');
        }]);
})();