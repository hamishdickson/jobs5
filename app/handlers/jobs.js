var http = require('http');
var config = require('../config.js');
var async = require('async');

exports.get_test_jobs = function(options, onResult) {

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest",
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
      onResult.send(res.statusCode, obj);
    });

  });

  reqGet.end();

  reqGet.on('error', function(e) {
    console.error('error: ' + e.message);
  });
}

exports.get_users_jobs = function(options, onResult) {

  var user = req.params.user;

  console.log("Get jobs for user: " + user);

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/job/user/" + user,
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
      onResult.send(res.statusCode, obj);
    });

  });

  reqGet.end();

  reqGet.on('error', function(e) {
    console.error('error: ' + e.message);
  });
}


exports.get_specific_job = function(options, onResult) {

  var user = req.params.jobNumber;

  console.log("Get jobs for user: " + user);

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/job/" + jobNumber,
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
      onResult.send(res.statusCode, obj);
    });

  });

  reqGet.end();

  reqGet.on('error', function(e) {
    console.error('error: ' + e.message);
  });
}

exports.get_users_jobs_for_status = function(res, data) {

  var user = res.params.user;
  var status = res.params.status;

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/job/" + user + '?status=' + status,
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
      onResult.send(res.statusCode, obj);
    });

  });

  reqGet.end();

  reqGet.on('error', function(e) {
    console.error('error: ' + e.message);
  });
}
