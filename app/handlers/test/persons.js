var http = require('http');
var config = require('../../config.js');

exports.get_test_persons = function(options, onResult) {

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest/person",
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
};

exports.get_persons = function(options, onResult) {

  var person = options.params.person;

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest/person/" + person,
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
};

exports.get_cb_persons = function(options, cb) {

    var person = options.params.person;

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: "/jobs3/jobtest/person/" + person,
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
