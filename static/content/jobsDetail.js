$(document).ready(function() {
  $(".convert-to-jira").click(function(){
    $(".jobsPanelDetail").attr('class', 'col-sm-6');
    alert("convert to jira issue (test)");
  });

  $(".expand-job").click(function() {
    var sizeClass = this.parentNode.parentNode.parentNode.parentNode;
    var me = this;
    var kiddies = this.childNodes;

    addToPage(1, function() {
      /*$(this.parentNode.parentNode.parentNode.parentNode).attr('class', 'col-sm-6');
      $(this).removeClass('expand-job').addClass('shrink-job');
      $(this.childNodes).removeClass('fa-arrows').addClass('fa-compress');*/
    });

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

function addToPage(jobNumber, callback) {
  var tmpl, tdata = {};

  $.get("/templates/jobsFullDetail.html", function(d) {
	  tmpl = d;
  });

  // get the jobs notes
  $.getJSON("http://localhost:8070/jobs3/jobtest/jobNotes/" + jobNumber, function(d) {
    $.extend(tdata, d);
  });

  $(document).ajaxStop(function() {
    var renderedPage = Mustache.to_html( tmpl, tdata );
    $("#more-detail").html( renderedPage );
  })
  callback();
}
