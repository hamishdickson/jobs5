/**
 * Created by hamishdickson on 19/07/2014.
 */
angular.module('MyApp')
    .controller('MainCtrl', ['$scope', 'Show', function($scope, Show, Job) {

        $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z'];

        $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
            'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
            'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
            'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
            'Travel'];

        $scope.statuss = ['A', 'B', 'Z', 'H', 'W'];

        $scope.headingTitle = 'All Jobs';

        $scope.shows = Show.query();

        $scope.filterByGenre = function(genre) {
            $scope.shows = Show.query({ genre: genre });
            $scope.headingTitle = genre;
        };

        $scope.filterByAlphabet = function(char) {
            $scope.shows = Show.query({ alphabet: char });
            $scope.headingTitle = char;
        };

        $scope.filterByStatus = function(char) {
            $scope.jobs = Job.query({ status: char });
            $scope.headingTitle = char;
        }
    }]);

