/**
 * Created by hamishdickson on 14/08/2014.
 */
(function () {
    var app = angular.module('MyApp');
    app.filter('searchFilter', function () {
        return function (input) {
            output = input;

            return output;
        };
    });
})();