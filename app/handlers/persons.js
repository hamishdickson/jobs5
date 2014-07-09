var http = require('http');
var config = require('../config.js');

exports.get_cb_persons = function(options, cb) {

    var person = options.params.person;

    var optionsget = {
        host: config.jobs_rest_host,
        port: config.jobs_rest_port,
        path: config.persons_persons_path + person,
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
exports.get_persons = function (options, cb) {
    exports.get_cb_persons(options, function (err, result) {
        cb.send(result.status, result.data);
    });
};