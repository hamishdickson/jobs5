/**
 * Created by hamishdickson on 31/07/2014.
 */
/*angular.module('MyApp')*/
var app = angular.module('MyApp');

    app.controller('JobsController', function () {
        this.jobsData = testJobs;

    });

    app.controller('NotesController', function () {
        this.note = {};

        this.addNote = function(job) {
            this.note.createdOn = Date.now();
            job.notes.push(this.note);
            job.response = this.note.response;
            this.note = {};
        };
    });

    app.controller('TabsController', function () {
        this.tab = 1;

        this.setTab = function(newValue) {
            this.tab = newValue;
        };

        this.isSet = function(tabName) {
            return this.tab === tabName;
        }

    });

    app.directive('jobNotes', function() {
        return {
            restrict: 'E',
            templateUrl: '/public/controllers/job-notes.html'
        };
    });

var testJobs = [
    {"jobNumber": 123456, "description": "first description 123456", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140901, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
    ], "notes": [], "response":""
    },
    {"jobNumber": 223456, "description": "2 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140723, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20141001, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 323456, "description": "3 description", "whoDo": "HD", "status": "W", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140723, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20141001, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 423456, "description": "4 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140701, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140501, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 523456, "description": "5 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140701, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140501, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 623456, "description": "6 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140701, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140501, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 723456, "description": "7 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140701, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"},
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140501, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 823456, "description": "8 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140901, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""},
    {"jobNumber": 923456, "description": "9 description", "whoDo": "HD", "status": "A", "client": "JHC", "importance": 3, "whoPay": "JHC", "contact": "Hamish", "workorder": 2, "jobType": "J", "enteredBy": "HD", "functionalArea": "WEBWEB", "system": "TRACEY", "invoiceText": "Test Job 1", "enteredDate": 20140624, "enteredTime": 900, "defect": "N", "liveUat": "L", "releaseVersion": "F63", "project": "JOBS", "urgent": "Y", "deliverables": [
        {"jobNumber": 123456, "id": 1, "promisedDate": 20140901, "type": "I", "description": "First deliverable", "deliveredDate": 0, "whoDo": "HD", "deleted": "N", "app": "F63", "internal": "Y"}
    ], "notes": [], "response":""}
];