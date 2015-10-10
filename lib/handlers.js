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
        var path = request.params.path;
        console.log(path);

        console.log("we are in api");

        switch (path) {
            case "getDesignerInfo":
            console.log("inside", path);
                console.log("designer info");
                api.getDesignerInfo(1, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("data in handlers", data);
                    }
                })
                break;
            case "getProductInfo":
                console.log("product info");
                break;
            default:
                console.log("inside", path);
                reply("hello api");
        }

    }

};
