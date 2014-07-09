//
// 04/02/14 HWD Creation
//

exports.version = '0.1.0';

exports.make_error = function(err, msg) {
    var e = new Error(msg);
    e.code = err;
    return e;
};

exports.no_such_user = function () {
    return exports.error("no_such_user",
        "The specified user does not exist");
};

exports.send_success = function(res, data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var output = { error: null, data: data };
    res.end(JSON.stringify(output) + "\n");
};

exports.send_failure = function(res, err) {
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code, { "Content-Type" : "application/json" });
    res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
};

exports.invalid_resource = function() {
    return exports.make_error("invalid_resource",
			      "the requested resource does not exist.");
};

exports.error = function (code, message) {
    var e = new Error(message);
    e.code = code;
    return e;
};

exports.http_code_for_error = function (err) {
    switch (err.message) {
        case "no_such_job":
            return 403;
        case "invalid_resource":
            return 404;
        case "no_such_jira":
            return 403;
        case "no_such_user":
            return 403;
    }

    console.log("*** Error needs HTTP response code: " + err.message);
    return 503;
};

exports.error_for_resp = function (err) {
    if (!err instanceof Error) {
        console.error("** Unexpected error type! :"
            + err.constructor.name);
        return JSON.stringify(err);
    } else {
        var code = err.code ? err.code : err.name;
        return JSON.stringify({ error: code,
            message: err.message });
    }
};
