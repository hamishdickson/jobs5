$(document).ready(function () {
    $(".expand-job").click(function () {
        $(this.parentNode.parentNode.parentNode.parentNode).attr('class', 'col-sm-6');
    });

    $(".more-detail").click(function () {
        var sizeClass = this.parentNode.parentNode.parentNode.parentNode;
        var me = this;
        var kiddies = this.childNodes;

        var title = $(this).siblings('.job-number').text();

        addToPage(title);
    });


    $(".hide-job").click(function () {
        $(this.parentNode.parentNode.parentNode).fadeOut('fast');
    });

    $('.another-job').click(function () {
        alert("another-job");
    });

    $(".jobs-on-wait").click(function () {
        alert("jobs on wait");
    });

    $(".jobs-on-hold").click(function () {
        alert("jobs on hold");
    });

});

function addToPage(jobNumber, callback) {
    var tmpl, tdata = {};

    $.get("/templates/jobsFullDetail.html", function (d) {
        tmpl = d;
    });

    // get the jobs notes
    $.getJSON("/jobs/notes/" + jobNumber, function (d) {
        $.extend(tdata, d);
    });

    $(document).ajaxStop(function () {
        var renderedPage = Mustache.to_html(tmpl, tdata);
        $("#more-detail").html(renderedPage);
    });

    callback();
}
