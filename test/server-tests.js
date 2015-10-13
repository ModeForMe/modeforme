var test = require("tape");
var server = require('../server.js');
var connection = require("../lib/database.js");

function testServer () {

    test("server is running and home loads", function (t) {
        server.inject({method: "GET", url: "/"}, function (response) {
            t.equal(response.statusCode, 200, "server is running and handlers.showHomePage works");
            t.end();
        })
    });

    test("application page loads", function (t) {
        server.inject({method: "GET", url: "/apply"}, function (response) {
            t.equal(response.statusCode, 200, "handlers.showApplicationPage works");
            t.end();
        })
    });

    test("contact page loads", function (t) {
        server.inject({method: "GET", url: "/contact"}, function (response) {
            t.equal(response.statusCode, 200, "handlers.showContactPage works");
            t.end();
        })
    });

    test("designer page loads", function (t) {
        server.inject({method: "GET", url: "/designers/1-emily-sato"}, function (response) {
            t.equal(response.statusCode, 200, "handlers.showDesignerPage works");
            t.end();
        })
    });

    test("product page loads", function (t) {
        server.inject({method: "GET", url: "/products/hem1"}, function (response) {
            t.equal(response.statusCode, 200, "handlers.showProductPage works");
            t.end();
        })
    });
};

module.exports = testServer;
