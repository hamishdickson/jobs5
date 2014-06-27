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
      $.getJSON("https://jira.jhc.co.uk/rest/api/2/search?jql=assignee=dicksonh", function(d) {
        $.extend(tdata, d);
        console.log(tdata);
      });

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
		    var renderedPage = Mustache.to_html( tmpl, tdata );

        $("#users-jira-detail").html( renderedPage );
	    })
	  }();
  });
});
