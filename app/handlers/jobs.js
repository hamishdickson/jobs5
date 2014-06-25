var helpers = require('./helpers.js'),
    fs = require('fs');

var http = require('http');

exports.getUserJobs = function(req, res) {

  var whodo = req.params.request;

  var options = {
    host: "http://localhost:8070/jobs3",
    port: 80,
    path: '/jobtest',
    method: 'GET'
  };

  http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
}
