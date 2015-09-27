module.exports = {

    home: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    api: function(request, reply) {
        var path;
        console.log(request.params.path);
        console.log("we are in api");

        switch (path) {
            case "getDesignerInfo":
                console.log("designer info");
                break;
            case "getProductInfo":
                console.log("product info");
                break;
            default:
                reply("hello api");
        }

    },

    showDesignerPage: function(request, reply) {
        console.log("we are in a designer");
        reply.file('./public/views/emily.html');
    },

    showProductPage: function(request, reply) {
        console.log("we are in a product");
        reply.file('./public/views/emily1.html');
    }

};
