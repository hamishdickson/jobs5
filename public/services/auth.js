/**
 * Created by hamishdickson on 09/08/2014.
 */
angular.module('MyApp')
    .factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore', '$alert',
        function($http, $location, $rootScope, $cookieStore, $alert) {
            $rootScope.currentUser = $cookieStore.get('user');
            $cookieStore.remove('user');

            return {
                login: function(user) {
                    return $http.post('/api/login', user)
                        .success(function(data) {
                            $rootScope.currentUser = data;
                            $location.path('/');

                            $alert({
                                title: 'Cheers!',
                                content: 'You have successfully logged in.',
                                placement: 'top-right',
                                type: 'success',
                                duration: 3
                            });
                        })
                        .error(function() {
                            $alert({
                                title: 'Error!',
                                content: 'Invalid username or password.',
                                placement: 'top-right',
                                type: 'danger',
                                duration: 3
                            });
                        });
                }
            };
        }]);