/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    angular.module('MyApp')
        .factory('Job', ['$resource', function ($resource) {
            return $resource('http://localhost:8070/jobs3/jobtest/:_id');
        }]);
})();