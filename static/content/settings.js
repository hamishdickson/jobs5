/**
 * Created by hamishdickson on 23/07/2014.
 */

$(function() {
    var tmpl, tdata = {};

    var url = window.location.pathname.split("/");

    // this doesn't feel that safe ...
    var jobNumber = url[3];

    var initPage = function() {
        $.get("/templates/settings.html", function(d) {
            tmpl = d;
        });

        $(document).ajaxStop(function (d) {
            var renderedPage = Mustache.to_html( tmpl, tdata );
            $("#data").html( renderedPage );
        });
    }();
});