$(document).ready(function() {

  $("#who-do-button").click(function(){
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

      $.getJSON("/jobs/test", function(d) {
        var out = $.parseJSON(d);
        $.extend(tdata, out);
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
