var http = require('http');

exports.get_users_jobs = function(res, data) {

  var options = {
    host: "localhost",
    port: 8070,
    path: '/jobs3/jobtest',
    headers: {
        accept: 'application/json'
    }
  };

  http.get(options, function(res) {
    var data = "";

    res.on("data", function(chunk) {
      data += chunk;
    });

    res.on("end", function() {
      console.log(data);
    });
  });

  //http.request(options, function(res) {
  //  console.log('STATUS: ' + res.statusCode);
  //  console.log('HEADERS: ' + JSON.stringify(res.headers));
  //  res.setEncoding('utf8');
  //  res.on('data', function (chunk) {
  //    console.log('BODY: ' + chunk);
  //  });
  //}).end();
}
