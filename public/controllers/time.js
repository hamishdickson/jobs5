/**
 * Created by hamishdickson on 01/10/2014.
 */

(function () {
    var app = angular.module('time-controller', []);

    app.directive('timerPage', ['$rootScope', '$scope', function ($rootScope, $scope) {

        return {
            restrict: 'E',
            templateUrl: '../views/time.html',
            controller: function () {

                this.start = new Date().getTime();

                this.startTime = function () {
                    if (this.timer.toggle == "start") {
                        this.start = new Date().getTime();
                        this.timer.toggle = "stop";
                    } else {
                        this.timer.toggle = "start";
                    }
                };

                this.timer = {
                    "toggle": "start",
                    "time": "=this.start"
                };
            },
            controllerAs: 'timeController'
        };

    }]);
})();