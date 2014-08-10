/**
 * Created by hamishdickson on 09/08/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('NotesController', ['$rootScope', '$http', function ($rootScope, $http) {
        //this.note = notesTest;
        var note = this;

        note.notesData = [];

        if ($rootScope.currentUser) {
            $http.get('http://localhost:8070/jobs3/jobtest/jobNotes/123455').success(function (data) {
                note.notesData = data;
            });
        }

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            job.notes.push(this.note);
            job.response = this.note.response;
            this.note = {};
        };
    }]);
})();