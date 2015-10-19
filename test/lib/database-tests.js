var test = require("tape");
var server = require('../../server.js');
var connection = require("../../lib/database.js");
var expectedInfo = require("../fixtures/test-data.js");

function testDatabase () {

    test("database is working", function (t) {
        var dataExists;

        connection.query("select * from designers", function (err, data) {

            if (data.length > 1) {
                dataExists = true;
            }
            t.equal(dataExists, true, "database is working");
            t.end();
        });

    });

    test("database gets info for one designer", function (t) {
        var expectedDesignerInfo = expectedInfo.designer;
        var requestedDesignerInfo;

        server.inject({method: "GET", url: "/api/getDesignerInfo/1"}, function (response) {

            requestedDesignerInfo = response.payload;
            t.equal(requestedDesignerInfo, expectedDesignerInfo, "handlers.getDesignerInfo works");
            t.end();
        })
    });

    test("database gets info for one product", function (t) {
        var expectedProductInfo = expectedInfo.product;
        var requestedProductInfo;

        server.inject({method: "GET", url: "/api/getProductInfo/1"}, function (response) {

            requestedProductInfo = response.payload;
            t.equal(requestedProductInfo, expectedProductInfo, "handlers.getProductInfo works");
            connection.end();
            server.stop();
            t.end();
        })
    });

}

module.exports = testDatabase;
