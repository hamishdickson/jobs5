/**
 * Created by hamishdickson on 09/08/2014.
 */
(function () {
    var app = angular.module('notes-controller', []);

    app.controller('NotesController', ['$rootScope', '$http', '$alert', 'HOSTING_CONFIG',
        function ($rootScope, $http, $alert, HOSTING_CONFIG) {

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            this.note.author = $rootScope.currentUser.name;

            this.note.jobNumber = job.jobNumber;

            var host = HOSTING_CONFIG.JOBS_REST_HOST;
            var port = HOSTING_CONFIG.JOBS_REST_PORT;
            var path = HOSTING_CONFIG.NOTES_PATH;

            var url = 'http://' + host + ':' + port + path;

            if (this.note.body) {
                var input = {
                    "jobNumber": parseInt(job.jobNumber),
                    "notes": this.note.body,
                    "softwarePackage": 0
                };

                $http.post(url, input)
                    .success(function () {
                        $alert({
                            title: 'Nice!',
                            content: "You've updated the job notes!",
                            placement: 'top-right',
                            type: 'success',
                            duration: 5
                        });
                    })
                    .error(function () {
                        $alert({
                            title: 'Error!',
                            content: 'There was a problem talking to the server!',
                            placement: 'top-right',
                            type: 'danger',
                            duration: 30
                        });
                    });
            }

            job.notes.push(this.note);

            this.note = {};
        };
    }]);
})();