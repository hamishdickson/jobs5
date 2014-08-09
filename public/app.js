/*
 angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $locationProvider.html5Mode(true);

 $routeProvider
 .when('/', {
 templateUrl: 'views/home.html',
 controller: 'MainCtrl'
 })
 .when('/shows/:id', {
 templateUrl: 'views/detail.html',
 controller: 'DetailCtrl'
 })
 .otherwise({
 redirectTo: '/'
 });
 }]);*/

(function () {
    var app = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap']);

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/detail/job/:id', {
                templateUrl: '../views/detail.html',
                controller: 'DetailController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
})();