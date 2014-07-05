$(document).ready(function() {
  $(".convert-to-jira").click(function(){
    $(".jobsPanelDetail").attr('class', 'col-sm-6');
    alert("convert to jira issue (test)");
  });

  $(".expand-job").click(function() {
    var tmpl;
    $.get("/templates/jobsFullDetail.html", function(d) {
		    tmpl = d;
	  });
    $(document).ajaxStop(function() {
      $('.jobsPanelDetail').html(tmpl);
      alert("expand for more details (test)");
    })
  });

  $(".hide-job").click(function(){
    $(this.parentNode.parentNode.parentNode.parentNode).fadeOut('fast');
  });

  $('.another-job').click(function() {
    alert("another-job");
  });

  $(".jobs-on-wait").click(function(){
    alert("jobs on wait");
  });

  $(".jobs-on-hold").click(function(){
    alert("jobs on hold");
  });

});
