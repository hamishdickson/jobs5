//
// 04/02/14 HWD Creation
//

$(function() {
	var tmpl, // main template HTML
        tdata = {}; // JSON data object that feeds the template

	// Initialise page
	var initPage = function() {

	    // Load the HTML template
	    $.get("/templates/home.html", function(d) {
		    tmpl = d;
	    });

      // get the jobs3 data
      $.getJSON("http://localhost:8070/jobs3/jobtest", function(d) {
        $.extend(tdata, d);
        console.log(tdata);
      });

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
		    var renderedPage = Mustache.to_html( tmpl, tdata );
		    $("#data").html( renderedPage );
	    })
	}();
});
