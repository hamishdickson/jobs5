/**
 * Created by hamishdickson on 17/07/2014.
 */

$(function() {
    var tmpl, tdata = {};

    var url = document.URL.split("/");
    var jobNumber = url[5];

    var initPage = function() {
        $.get("/templates/bigDetail.html", function(d) {
            tmpl = d;
        });

        $.getJSON("/jobs/number/" + jobNumber, function(d) {
            $.extend(tdata, d);
        });

        $(document).ajaxStop(function (d) {
            var renderedPage = Mustache.to_html( tmpl, tdata );
            $("#data").html( renderedPage );
        });
    }();
});