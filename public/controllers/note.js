/**
 * Created by hamishdickson on 09/08/2014.
 */
(function () {
    var app = angular.module('MyApp');

    app.controller('NotesController', function () {
        this.note = notesTest;

        this.addNote = function (job) {
            this.note.createdOn = Date.now();
            job.notes.push(this.note);
            job.response = this.note.response;
            this.note = {};
        };
    });

    var notesTest = [
        {"jobNumber": 123456, "body": "well, here we go", "response": "Not one for a while", "author": "me@domain"}
    ];
})();