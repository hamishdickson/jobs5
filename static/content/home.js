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

      // when AJAX calls are complete parse the template
      // replacing Mustache tags with vars
	    $(document).ajaxStop(function() {
		    var renderedPage = Mustache.to_html( tmpl, tdata );
		    $("#data").html( renderedPage );

            var jobsData = {};

            $(document).ready(function () {

                $("#who-do-text-box").keyup(function (event) {
                    if (event.which == 13 || event.keyCode == 13) {
                        $("#who-do-button").click();
                    }
                });

                $("a.list-group-item.jobs-in-progress").click(function(){
                    $("h3.job-number").css({"color": "blue"});
                });

                $("#who-do-button").click(function () {
                    $(this).attr('disabled');
                    $(this).addClass('fa-spin').removeClass('fa-child');

                    var tmpl, tmpl2, tmpl3, tmpl4,
                        tdata = {}; // JSON data object that feeds the template

                    var whosJobsToGet = $("input[name=users-jobs-button]").val();

                    // Initialise page
                    var initPage = function () {

                        // Load the HTML template
                        $.get("/templates/jobsSummary.html", function (d) {
                            tmpl = d;
                        });

                        $.get("/templates/jobsDetail.html", function (d) {
                            tmpl2 = d;
                        });

                        $.get("/templates/personSummary.html", function (d) {
                            tmpl3 = d;
                        });

                        $.get("/templates/warnings/user-not-found.html", function (d) {
                            tmpl4 = d;
                        });

                        // get the users data
                        $.getJSON("/user/" + whosJobsToGet, function (d) {
                            jobsData = d;
                            $.extend(tdata, d);
                        });

                        // when AJAX calls are complete parse the template
                        // replacing Mustache tags with vars
                        $(document).ajaxStop(function () {
                            var renderedPage2 = Mustache.to_html(tmpl2, tdata);

                            $("#users-jobs-detail").html(renderedPage2);

                            //if (!jQuery.isEmptyObject(tdata)) {
                            var renderedPage = Mustache.to_html(tmpl, tdata);
                            var renderedPage3 = Mustache.to_html(tmpl3, tdata);

                            $("#users-jobs-summary").html(renderedPage);
                            $("#person-summary").html(renderedPage3);

                            $('.fa-spin').addClass('fa-child').removeClass('fa-spin');

                            $('p.job-status').filter(function(){
                                return $(this).text()=='Status: A'
                            }).addClass("in-progress");

                            $('p.job-status').filter(function(){
                                return $(this).text()=='Status: W'
                            }).addClass("on-wait");

                            $('p.job-status').filter(function(){
                                return $(this).text()=='Status: H'
                            }).addClass("on-wait");

                            var today = new Date();

                            $('p.deliverable-date').filter(function(){
                                return $(this).text()==today
                            }).addClass("due-today");


                            $('p.deliverable-date').filter(function(){
                                return parseInt($(this).text()) < parseInt(today)
                            }).addClass("due-past");

                            /*$("a.list-group-item.jobs-in-progress").hover(
                                function(){ $("h3.job-number").css({"color": "#9351a6"}); },
                                function(){ $("h3.job-number").css({"color": "#cccccc"}); }
                            );*/

                            $("a.list-group-item.jobs-in-progress").hover(
                                function(){ $("p.in-progress").css({"color": "#9351a6"}); },
                                function(){ $("p.in-progress").css({"color": "#cccccc"}); }
                            );

                            /*$("a.list-group-item.jobs-on-wait").hover(
                                function(){ $("h3.job-number").css({"color": "#4472b9"}); },
                                function(){ $("h3.job-number").css({"color": "#cccccc"}); }
                            );*/

                            $("a.list-group-item.jobs-on-wait").hover(
                                function(){ $("p.on-wait").css({"color": "#4472b9"}); },
                                function(){ $("p.on-wait").css({"color": "#cccccc"}); }
                            );

                            /*$("a.list-group-item.jobs-on-hold").hover(
                                function(){ $("h3.job-number").css({"color": "#20B2AA"}); },
                                function(){ $("h3.job-number").css({"color": "#cccccc"}); }
                            );*/


                            $("a.list-group-item.jobs-on-hold").hover(
                                function(){ $("p.on-hold").css({"color": "#20B2AA"}); },
                                function(){ $("p.on-hold").css({"color": "#cccccc"}); }
                            );

                            $(".list-group-item.greenJobs").hover(
                                function(){ $("p.deliverable-date").css({"color": "#5cb85c"}); },
                                function(){ $("p.deliverable-date").css({"color": "#cccccc"}); }
                            );

                            $(".list-group-item.orangeJobs").hover(
                                function(){ $("p.deliverable-date").css({"color": "#e08037"}); },
                                function(){ $("p.deliverable-date").css({"color": "#cccccc"}); }
                            );
/*
                            $(".list-group-item.redJobs").hover(
                                function(){ $("p.deliverable-date").css({"color": "#7e0104"}); },
                                function(){ $("p.deliverable-date").css({"color": "#cccccc"}); }
                            );*/

                            $(".list-group-item.redJobs").hover(
                                function(){ $("p.deliverable-date.due-past").css({"color": "#7e0104"}); },
                                function(){ $("p.deliverable-date.due-past").css({"color": "#cccccc"}); }
                            );
                        })
                    }();

                });


                $("#specific-text-box").keyup(function (event) {
                    if (event.which == 13) {
                        $("#specific-job-button").click();
                    }
                });

                $("#specific-job-button").click(function () {
                    var tmplSpecific,
                        tdataSpecific = {}; // JSON data object that feeds the template

                    var jobNumber = $("input[name=job-number]").val();

                    // Initialise page
                    var initPage = function () {

                        // Load the HTML template
                        $.get("/templates/jiraDetail.html", function (d) {
                            tmplSpecific = d;
                        });

                        // get the jobs3 data
                        $.getJSON("/jobs/" + jobNumber, function (d) {
                            $.extend(tdataSpecific, d);
                        });

                        // when AJAX calls are complete parse the template
                        // replacing Mustache tags with vars
                        $(document).ajaxStop(function () {
                            var renderedPage = Mustache.to_html(tmplSpecific, tdataSpecific);

                            $("#specific-job").append(renderedPage);
                        })
                    }();
                });

                $('#users-jobs-detail').sortable();

            });

	    });
	}();
});

Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = this.getDate().toString();
    return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
};

function linkMaker(inText) {
    var regex_for_job = "\ [1-9][0-9]{6}\ |\(00[1-9][0-9]{6}\)";
    var replaceString = "bob";
    var outText = inText.replace(regex_for_job, replaceString);

    return outText;
}

function formatDate(inDate) {
    var inDateString = inDate.toString();
    var outDate = inDateString.substr(6,2) + '/' + inDateString.substr(4,2) + '/' + inDateString.substr(0,4);
    return outDate;
}

function getDetails() {

}