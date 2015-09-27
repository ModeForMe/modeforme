var test = require("tape");
var server = require('../server.js');

test("tape is working", function (t) {
    t.equal(1, 1, "tape works");
    t.end();
});

test("server is running", function (t) {
    server.inject({method: "GET", url: "/"}, function (response) {
        t.equal(response.statusCode, 200, "server is running");
    })
    t.end();
});
