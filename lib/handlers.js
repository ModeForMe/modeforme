var api = require("./api.js")

module.exports = {

    showHomePage: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    showDesignerPage: function(request, reply) {
        console.log("we are in a designer");
        reply.file('./public/views/emily.html');
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
                var designerId = (request.params.path).split("/")[1];
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
