$(document).ready(function() {

  $("#whoDoButton").click(function(){
    var tmpl, tmpl2, tmpl3,
        tdata = {}; // JSON data object that feeds the template

    var whosJobsToGet = $("input[name=whosJobs]").val();

	  // Initialise page
	  var initPage = function() {

	    // Load the HTML template
	    $.get("/templates/jobsSummary.html", function(d) {
		    tmpl = d;
	    });

      $.get("/templates/jobsDetail.html", function(d) {
		    tmpl2 = d;
	    });

      $.get("/templates/personSummary.html", function(d) {
		    tmpl3 = d;
	    });

      // get the jobs3 data
      $.getJSON("http://172.24.24.233:8070/jobs3/job/user/" + whosJobsToGet, function(d) {
        $.extend(tdata, d);
        console.log(tdata);
      });

      //$.getJSON("/jobs/jobtest", function(d) {
      //  $.extend(tdata, d);
      //  console.log(tdata);
      //});

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
		    var renderedPage = Mustache.to_html( tmpl, tdata );
        var renderedPage2 = Mustache.to_html( tmpl2, tdata );
        var renderedPage3 = Mustache.to_html( tmpl3, tdata );

		    $("#whosJobsSummary").html( renderedPage );
        $("#whosJobsDetail").html( renderedPage2 );
        $("#personSummary").html( renderedPage3 );
	    })
	  }();
  });

  $("#bobButton").click(function(){
      $.getJSON("/job/user/" + whosJobsToGet, function(d) {
        $.extend(tdata, d);
        console.log(tdata);
      });
	  }();
  });
});
