/*
 * NOTE the s in https!
 */
var https = require('https');
var config = require('../config.js');
var async = require('async');
var helpers = require('./helpers.js');

exports.get_cb_users_jiras = function (options, cb) {

    var windowsProfile = options.params.windowsProfile;


    console.log("Get all jira issues for user: " + windowsProfile);

    var optionsget = {
        host: config.jira_rest_host,
        port: config.jobs_rest_port,
        path: config.jira_users_jiras_path + windowsProfile,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var reqGet = https.request(optionsget, function (res) {
        var output = '';

        res.setEncoding('utf-8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            if (output != '') {
                var obj = JSON.parse(output);
            }
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
exports.get_users_jiras = function (options, cb) {
    exports.get_cb_users_jiras(options, function (err, result) {
        if (err) {
            console.log("Error : " + err.message);
            cb.send(helpers.error(500, "Internal server error"));
        } else {
            cb.send(result.status, result.data);
        }
    });
};
