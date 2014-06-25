exports.getUserJobs = function(whoDo, status) {
  var tdata = {};
  // get the jobs3 data
  $.getJSON("http://localhost:8070/jobs3/jobtest", function(d) {
    $.extend(tdata, d);
    console.log(tdata);
  });
}
