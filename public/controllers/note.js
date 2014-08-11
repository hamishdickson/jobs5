/**
 * Created by hamishdickson on 09/08/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('NotesController', ['$rootScope', '$http', '$alert', function ($rootScope, $http, $alert) {

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            this.note.author = $rootScope.currentUser.name;

            this.note.jobNumber = job.jobNumber;

            if (this.note.body) {
                var input = {
                    "jobNumber": parseInt(job.jobNumber),
                    "notes": this.note.body,
                    "softwarePackage": 0
                };

                $http.post('http://localhost:8070/jobs3/jobtest/jobNotes', input)
                //$http.post('http://172.24.24.217:8070/jobs3/job/jobNotes', input)
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