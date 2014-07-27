/**
 * Created by hamishdickson on 19/07/2014.
 */
angular.module('MyApp')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id');
    }]);