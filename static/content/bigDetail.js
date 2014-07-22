/**
 * Created by hamishdickson on 17/07/2014.
 */

$(function() {
    var tmpl, tdata = {};

    var url = window.location.pathname.split("/");

    // this doesn't feel that safe ...
    var jobNumber = url[3];

    var initPage = function() {
        $.get("/templates/bigDetail.html", function(d) {
            tmpl = d;
        });

        $.getJSON("/jobs/number/" + jobNumber, function(d) {
            $.extend(tdata, d);
        });

        $.getJSON("/jobs/notes/" + jobNumber, function(d) {
            d.notes = formatNotes(d.notes);
            $.extend(tdata, d);
        });

        $(document).ajaxStop(function (d) {
            var renderedPage = Mustache.to_html( tmpl, tdata ).replace(/([1-2][0-9]{5})/g, '<a href="/pages/bigDetail/\$1" target="_blank">\$1</a>');
            $("#data").html( renderedPage );
        });
    }();
});

/*
 * ok this looks a bit arbitrary, but 4 spaces should be enough to indicate a breakline
 */

var formatNotes = function (inNotes) {
    var output = inNotes;

    /*output = output.split("    ");*/
    output = output.split("\n");
    return output;
};