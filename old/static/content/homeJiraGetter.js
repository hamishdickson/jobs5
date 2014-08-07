$(document).ready(function() {

  $("#whoDoJiraButton").click(function(){
    var tmpl,
        tdata = {}; // JSON data object that feeds the template

    var whosJobsToGet = $("input[name=whosJira]").val();

	  // Initialise page
	  var initPage = function() {

	    // Load the HTML template
      $.get("/templates/jiraDetail.html", function(d) {
		    tmpl = d;
	    });

      // get the jobs3 data
      $.getJSON("http://localhost:8070/jobs3/jobtest/" + whosJobsToGet, function(d) {
        $.extend(tdata, d);
      });

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
          var renderedPage = Mustache.to_html( tmpl, tdata );

          $("#users-jira-detail").append( renderedPage );
	    })
	  }();
  });
});
