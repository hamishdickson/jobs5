/**
 * Created by hamishdickson on 05/08/2014.
 */
angular.module('MyApp')
    .controller('NotesController', function () {
        this.note = {};

        this.addNote = function(job) {
            job.notes.push(this.note);

            this.note = {};
        };
    });