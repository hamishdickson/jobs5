/**
 * Created by hamishdickson on 12/07/2014.
 */
var http = require('http');
var config = require('../config.js');

exports.get_cb_deliverables_for_user = function(options, cb) {

    var user = options.params.user;

    var optionsget = {
        host: config.JOBS_REST_HOST,
        port: config.jobs_rest_port,
        path: config.DELIVERABLES_PATH_FOR_USER + user,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function(res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function(chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            cb(null, {
                status: res.statusCode,
                data: obj
            });
        });

    });

    reqGet.end();

    reqGet.on('error', function(err) {
        cb(err);
    });
};

// so you can call it directly
exports.get_deliverables_for_user = function (options, cb) {
    exports.get_cb_deliverables_for_user(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};

exports.get_cb_deliverables_for_job = function(options, cb) {

    var jobNumber = options.params.jobNumber;

    var optionsget = {
        host: config.JOBS_REST_HOST,
        port: config.jobs_rest_port,
        path: config.DELIVERABLES_PATH_FOR_USER + jobNumber,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = http.request(optionsget, function(res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function(chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            cb(null, {
                status: res.statusCode,
                data: obj
            });
        });

    });

    reqGet.end();

    reqGet.on('error', function(err) {
        cb(err);
    });
};

// so you can call it directly
exports.get_deliverables_for_job = function (options, cb) {
    exports.get_cb_deliverables_for_job(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};