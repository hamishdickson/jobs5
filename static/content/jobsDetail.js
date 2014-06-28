$(document).ready(function() {
  $(".hide-job").click(function(){
    $(this.parentNode.parentNode.parentNode.parentNode).fadeOut('slow');
  });

  $('.another-job').click(function() {
    alert("another-job");
  });

  $(".expand-job").click(function() {
    var tmpl;
    $.get("/templates/jobsFullDetail.html", function(d) {
		    tmpl = d;
	  });
    $(document).ajaxStop(function() {
      $('.jobsPanelDetail').html(tmpl);
    })
  });
});
