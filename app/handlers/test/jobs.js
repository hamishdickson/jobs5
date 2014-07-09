var http = require('http');
var config = require('../../config.js');
var async = require('async');

exports.get_users_jobs = function(options, onResult) {

  var user = options.params.user;

  console.log("Get (test) jobs for user: " + user);

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest/user/" + user,
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


exports.get_specific_job = function(options, onResult) {

  var jobNumber = options.params.jobNumber;

  console.log("Get specific job number: " + jobNumber);

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest/" + jobNumber,
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
    four_oh_four();
  });
};

exports.get_users_jobs_for_status = function(res, data) {

  var user = res.params.user;
  var status = res.params.status;

  var optionsget = {
    host: config.jobs_rest_host,
    port: config.jobs_rest_port,
    path: "/jobs3/jobtest/" + user + '?status=' + status,
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

exports.post_job = function(res, data) {

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

  var reqPost = http.request(options, function(res) {
    var output = '';

    res.setEncoding('utf-8');

    res.on('data', function(d) {
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

  reqPost.on('error', function(e) {
    console.error('error: ' + e.message);
    //four_oh_four;
  });
};

exports.get_job_notes = function(options, onResult) {

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

function four_oh_four(req, res) {
    res.writeHead(404, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(helpers.invalid_resource()) + "\n");
}

function internal_error(req, res) {
    helpers.send_failure()
}