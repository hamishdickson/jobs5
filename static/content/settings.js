/**
 * Created by hamishdickson on 23/07/2014.
 */

$(function () {

    // change which menu option is active
    var url = window.location;
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');

    $('ul.nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active');

    var tmpl, tdata = {};

    // Get the job number from the url
    var urlArray = window.location.pathname.split("/");
    var jobNumber = urlArray[3];

    // must specify that we the cookie is json
    $.cookie.json = true;

    var value = $.cookie('Jobs5');

    // if there isn't a cookie, create one
    if (value === undefined) {
        var cookieData = {
            "name": "",
            "rememberMe": false,
            "helpText": false,
            "removeMe": false
        };

        $.cookie('Jobs5', cookieData);
    } else {
    }

    var initPage = function () {
        $.get("/templates/settings.html", function (d) {
            tmpl = d;
        });

        $(document).ajaxStop(function (d) {
            var renderedPage = Mustache.to_html(tmpl, tdata);
            $("#data").html(renderedPage);

            // add in the cookie data
            $("span.user").text(value.name);

            if (value.rememberMe) {
                $("#remember-me-onoff").attr('checked', true);
            }

            if (value.helpText) {
                $("#help-text-onoff").attr('checked', true);
            }

            $('#remember-me-onoff').click(function () {
                value.rememberMe = this.checked;

                $("#remove-me-onoff").attr('checked', false);

                $.cookie('Jobs5', value);
            });

            $('#help-text-onoff').click(function () {
                value.helpText = this.checked;

                $("#remove-me-onoff").attr('checked', false);

                $.cookie('Jobs5', value);
            });

            $('#remove-me-onoff').click(function () {
                if (this.checked) {
                    $("#remember-me-onoff").attr('checked', false);
                    $("#help-text-onoff").attr('checked', false);

                    // delete cookie
                    $.removeCookie('Jobs5');
                }
            });

        });
    }();
});