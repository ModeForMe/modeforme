var test = require("tape");
var server = require('../server.js');

test("server is running and home loads", function (t) {
    server.inject({method: "GET", url: "/"}, function (response) {
        t.equal(response.statusCode, 200, "server is running and handlers.home works");
        t.end();
    });
});

test("application page loads", function (t) {
    server.inject({method: "GET", url: "/apply"}, function (response) {
        t.equal(response.statusCode, 200, "handlers.application works");
        t.end();
    });
});

test("contact page loads", function (t) {
    server.inject({method: "GET", url: "/contact"}, function (response) {
        t.equal(response.statusCode, 200, "handlers.contact works");
        t.end();
    });
});

test("about page loads", function (t) {
    server.inject({method: "GET", url: "/about"}, function (response) {
        t.equal(response.statusCode, 200, "handlers.about works");
        t.end();
    });
});

test("product page loads", function (t) {
    server.inject({method: "GET", url: "/product"}, function (response) {
        t.equal(response.statusCode, 200, "handlers.product works");
        t.end();
    });
});
