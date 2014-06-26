var helpers = require('./helpers.js'),
    fs = require('fs'),
    async = require('async');

var http = require('http');
var url = "localhost";

exports.getUserJobs = function(req, res) {
  var whodo = req.params.request;

  var options = {
    host: url,
    port: 8070,
    path: '/jobs3/jobtest',
    method: 'GET'
  };

  var output = http.request(options, function(res) {
    console.log("got this far 2");
    console.log("output: " + res.statusCode);
  }).on();

  return output;
}
