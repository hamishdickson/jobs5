var http = require('http');
var config = require('../config.js');
var async = require('async');

exports.get_cb_users_jobs = function (options, cb) {

    var user = options.params.user;

    console.log("Get all jobs for user: " + user);

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: config.jobs_users_jobs_path + user,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            var obj = JSON.parse(output);
            cb(null, {
                status: res.statusCode,
                data: obj
            });
        });

    });

    reqGet.end();

    reqGet.on('error', function (err) {
        cb(err);
    });
};

// so you can call it directly
exports.get_users_jobs = function (options, cb) {
    exports.get_cb_users_jobs(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};

exports.get_cb_specific_job = function (options, cb) {

    var jobNumber = options.params.jobNumber;

    console.log("Get specific job number: " + jobNumber);

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: config.jobs_specific_job_path + jobNumber,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            var obj = JSON.parse(output);
            cb(null, {
                status: res.statusCode,
                data: obj
            });
        });

    });

    reqGet.end();

    reqGet.on('error', function (err) {
        cb(err);
    });
};

// so you can call it directly
exports.get_specific_job = function (options, cb) {
    exports.get_cb_specific_job(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};

exports.get_cb_users_jobs_for_status = function (options, cb) {

    var user = options.params.user;
    var status = options.params.status;

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: config.jobs_users_jobs_for_status_path + user + "?status=" + status,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {

            var obj = JSON.parse(output);
            cb(null, {
                status: res.statusCode,
                data: obj
            });
        });

    });

    reqGet.end();

    reqGet.on('error', function (err) {
        cb(err);
    });
};

// so you can call it directly
exports.get_users_jobs_for_status = function (options, cb) {
    exports.get_cb_users_jobs_for_status(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};

exports.post_job = function (res, data) {

    var post_data = {
        "jobNumber": 121,
        "description": "first description",
        "whoDo": "HD",
        "status": "A",
        "client": "JHC",
        "importance": 3,
        "whoPay": "JHC",
        "contact": "Hamish",
        "workorder": 2,
        "jobType": "J",
        "enteredBy": "HD",
        "functionalArea": "WEBWEB",
        "system": "TRACEY",
        "invoiceText": "Test Job 1",
        "enteredDate": 20140624,
        "enteredTime": 900,
        "defect": "N",
        "liveUat": "L",
        "releaseVersion": "F63",
        "project": "JOBS",
        "urgent": "Y"
    };

    var outJson = JSON.stringify(post_data);

    var options = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: "/jobs3/jobtest",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Content-Length": Buffer.byteLength(outJson, 'utf8')
        }
    };

    var reqPost = http.request(options, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (d) {
            //output += chunk;
            console.info('POST result:\n');
            process.stdout.write(d);
            console.info('\n\nPOST completed');
        });
        /*
         res.on('end', function(d) {
         var obj = JSON.parse(output);
         d.send(res.statusCode, obj);
         });*/

    });

    reqPost.write(outJson);

    reqPost.end();

    reqPost.on('error', function (e) {
        console.error('error: ' + e.message);
        //four_oh_four;
    });
};

exports.get_job_notes = function (options, onResult) {

    var jobNumber = options.params.jobNumber;

    console.log("Get (test) job notes for job number: " + jobNumber);

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: "/jobs3/jobtest/jobNotes/" + jobNumber,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            var obj = JSON.parse(output);
            onResult.send(res.statusCode, obj);
        });

    });

    reqGet.end();

    reqGet.on('error', function (e) {
        console.error('error: ' + e.message);
    });
};