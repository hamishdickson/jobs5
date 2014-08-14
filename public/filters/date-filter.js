/**
 * Created by hamishdickson on 14/08/2014.
 */
(function () {
    var app = angular.module('MyApp');
    app.filter('dateFilter', function () {
        return function (input) {
            output = input.toString();
            if (angular.isDefined(output)) {
                output = output.slice(0, 8);

                output = output.slice(6, 8) + '/' + output.slice(4, 6) + '/' + output.slice(0, 4);
            }
            return output;
        };
    });
})();