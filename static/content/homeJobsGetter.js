$(document).ready(function() {

  $("#who-do-text-box").keyup(function(event){
    if(event.which == 13){
        $("#who-do-button").click();
    }
  });

  $("#who-do-button").click(function(){
    $(this).attr('disabled');
    $(this).addClass('fa-spin').removeClass('fa-child');

    var tmpl, tmpl2, tmpl3, tmpl4,
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

      $.get("/templates/warnings/user-not-found.html", function(d) {
		    tmpl4 = d;
	    });

      // get the users data
      $.getJSON("/user/" + whosJobsToGet, function(d) {
        $.extend(tdata, d);
      });

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	  $(document).ajaxStop(function() {
        var renderedPage2 = Mustache.to_html( tmpl2, tdata );

		$("#users-jobs-detail").html( renderedPage2 );

        //if (!jQuery.isEmptyObject(tdata)) {
          var renderedPage = Mustache.to_html( tmpl, tdata );
          var renderedPage3 = Mustache.to_html( tmpl3, tdata );

          $("#users-jobs-summary").html( renderedPage );
          $("#person-summary").html( renderedPage3 );

        /*} else {
          $("#user-message-panel").html( tmpl4 );
        }*/

        $('.fa-spin').addClass('fa-child').removeClass('fa-spin');
	    })
	  }();

  });


  $("#specific-text-box").keyup(function(event){
    if(event.which == 13){
        $("#specific-job-button").click();
    }
  });

  $("#specific-job-button").click(function(){
    var tmplSpecific,
        tdataSpecific = {}; // JSON data object that feeds the template

    var jobNumber = $("input[name=job-number]").val();

	  // Initialise page
	  var initPage = function() {

	    // Load the HTML template
      $.get("/templates/jiraDetail.html", function(d) {
		    tmplSpecific = d;
	    });

      // get the jobs3 data
      $.getJSON("/jobs/test" + jobNumber, function(d) {
        $.extend(tdataSpecific, d);
      });

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
          var renderedPage = Mustache.to_html( tmplSpecific, tdataSpecific );

          $("#specific-job").append( renderedPage );
	    })
	  }();
  });

  $('#users-jobs-detail').sortable();

});
