$(document).ready(function() {

  $("#whoDoButton").click(function(){
    var tmpl, tmpl2, tmpl3,
        tdata = {}; // JSON data object that feeds the template

    var whosJobsToGet = $("input[name=users-jobs-button]").val();

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
      //$.getJSON("http://172.24.24.233:8070/jobs3/job/user?userId=" + whosJobsToGet + '&status=A', function(d) {
      //  $.extend(tdata, d);
      //  console.log(tdata);
      //});

      // get the jobs3 data
      $.getJSON("http://localhost:8070/jobs3/jobtest", function(d) {
        $.extend(tdata, d);
        console.log(tdata);
      });


      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {

		    var renderedPage = Mustache.to_html( tmpl, tdata );
        var renderedPage2 = Mustache.to_html( tmpl2, tdata );
        var renderedPage3 = Mustache.to_html( tmpl3, tdata );

		    $("#users-jobs-summary").html( renderedPage );
        $("#users-jobs-detail").html( renderedPage2 );
        $("#person-summary").html( renderedPage3 );
	    })
	  }();
  });

  $('#users-jobs-detail').sortable();

});
