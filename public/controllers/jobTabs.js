/**
 * Created by hamishdickson on 09/08/2014.
 */

(function () {
    var app = angular.module('job-tabs-controller', []);

    app.directive('jobTabs', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/jobs-tabs.html',
            controller: function () {
                this.tab = 1;

                this.setTab = function (newValue) {
                    this.tab = newValue;
                };

                this.isSet = function (tabName) {
                    return this.tab === tabName;
                }
            },
            controllerAs: 'tabCtrl'
        };
    });

})();