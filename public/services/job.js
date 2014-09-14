/**
 * Created by hamishdickson on 19/07/2014.
 */
(function () {
    angular.module('MyApp')
        .factory('Job', ['$resource', 'HOSTING_CONFIG', function ($resource, HOSTING_CONFIG) {

            var host = HOSTING_CONFIG.JOBS_REST_HOST;
            var port = HOSTING_CONFIG.JOBS_REST_PORT;
            var path = HOSTING_CONFIG.JOBS_SPECIFIC_JOB_PATH;

            var url = 'http://' + host + ':' + port + path + ':_id';

            return $resource(url);
        }]);
})();