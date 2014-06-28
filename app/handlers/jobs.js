var http = require('http');

exports.get_users_jobs = function(res, data) {

  var options = {
    host: "localhost",
    port: 8070,
    path: '/jobs3/jobtest'
  };

  http.get('http://localhost:8070/jobs3/jobtest', function(res) {
    var data = "";

    console.log('Response is: ' + res.statusCode);

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
