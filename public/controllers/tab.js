/**
 * Created by hamishdickson on 04/08/2014.
 */
angular.module('MyApp')
    .controller('TabsController', function () {
        this.tab = 1;

        this.setTab = function(newValue) {
            this.tab = newValue;
        };

        this.isSet = function(tabName) {
            return this.tab === tabName;
        }

    });