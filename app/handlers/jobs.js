var http = require('http');
var config = require('../config.js');

exports.get_test_jobs = function(res, data) {

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest",
    method: "GET"
  };

  var reqGet = http.request(optionsget, function(res) {
    res.setEncoding('utf-8');

    res.on('data', function(d) {
      data.json(d);
    });
  });

  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });
}

exports.get_users_jobs = function(res, data) {

  var user = req.params.user;

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/job/user/" + user,
    method: "GET"
  };

  var reqGet = http.request(optionsget, function(res) {
    res.setEncoding('utf-8');

    res.on('data', function(d) {
      data.json(d);
    });
  });

  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });
}

exports.get_users_jobs_for_status = function(res, data) {

  var user = req.params.user;
  var user = req.params.status;

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/job/" + user + "?status=" + status,
    method: "GET"
  };

  var reqGet = http.request(optionsget, function(res) {
    res.setEncoding('utf-8');

    res.on('data', function(d) {
      data.json(d);
    });
  });

  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });
}
