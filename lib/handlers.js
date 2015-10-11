var api = require("./api.js");
var fs = require("fs");

module.exports = {

    showHomePage: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    showDesignerPage: function(request, reply) {
        console.log("we are in a designer");

        var assembledDesignerPage;

        fs.readFile("./public/views/designer.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                var designerName;
                var designerId = (request.params.path).split("-")[0];
                api.getDesignerInfo(designerId, function (designerErr, designerInfo) {

                    if (designerErr) {
                        console.log(err);
                    } else {
                        if (designerInfo[0].brand_name) {
                            designerName = designerInfo[0].brand_name;
                        } else {
                            designerName = designerInfo[0].first_name + ' ' + designerInfo[0].last_name;
                        }
                        assembledDesignerPage = data.replace('<h1 class="designer-title"></h1>', '<h1 class="designer-title">' + designerName + '</h1>')
                        .replace('<div class="designer-story"></div>', '<div class="designer-story">' + designerInfo[0].bio + '</div>')
                        .replace('<h4 class="designs-by"></h4>', '<h4 class="designs-by">Designs by ' + designerName + '</h4>');
                        reply(assembledDesignerPage);
                    }
                })
            }
        })
    },

    showProductPage: function(request, reply) {
        console.log("we are in a product");
        reply.file('./public/views/emily1.html');
    },

    showApplicationPage: function(request, reply) {
        reply.file('./public/views/apply.html');
    },

    showContactPage: function(request, reply) {
        reply.file('./public/views/contact.html');
    },

    api: function(request, reply) {

        var path = (request.params.path).split("/")[0];

        switch (path) {

            case "getDesignerInfo":
                var designerId = (request.params.path).split("/")[1].split("-")[0];
                api.getDesignerInfo(designerId, function(err, data) {

                    if (err) {
                        console.log(err);
                    } else {
                        reply(data);
                    }
                });
                break;

            case "getProductInfo":
                var productId = (request.params.path).split("/")[1];
                api.getProductInfo(productId, function(err, data) {

                    if (err) {
                        console.log(err);
                    } else {
                        reply(data);
                    }
                });
                break;

            default:
                reply("hello api");
        }

    }

};
