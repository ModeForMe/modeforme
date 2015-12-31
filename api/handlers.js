var braintree = require("./braintree.js");

module.exports = {

    home: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    product: function(request, reply) {
        reply.file('./public/views/product.html');
    },

    about: function(request, reply) {
        reply.file('./public/views/about.html');
    },

    application: function(request, reply) {
        reply.file('./public/views/apply.html');
    },

    contact: function(request, reply) {
        reply.file('./public/views/contact.html');
    },

    emily: function(request, reply) {
        reply.file('./public/views/emily.html');
    },

    lukas: function(request, reply) {
        reply.file('./public/views/lukas.html');
    },

    hemyca: function(request, reply) {
        reply.file('./public/views/hemyca.html');
    },

    emily1: function(request, reply) {
        reply.file('./public/views/emily1.html');
    },

    emily2: function(request, reply) {
        reply.file('./public/views/emily2.html');
    },

    emily3: function(request, reply) {
        reply.file('./public/views/emily3.html');
    },

    lukas1: function(request, reply) {
        reply.file('./public/views/lukas1.html');
    },

    lukas2: function(request, reply) {
        reply.file('./public/views/lukas2.html');
    },

    lukas3: function(request, reply) {
        reply.file('./public/views/lukas3.html');
    },

    hemyca1: function(request, reply) {
        reply.file('./public/views/hemyca1.html');
    },

    hemyca2: function(request, reply) {
        reply.file('./public/views/hemyca2.html');
    },

    hemyca3: function(request, reply) {
        reply.file('./public/views/hemyca3.html');
    },

    cart: function(request, reply) {
        reply.file('./public/views/cart.html');
    },

    braintreeToken: function(request, reply) {
        braintree.getClientToken(function(err, token) {
            console.log("in handlers", token);
        });
    },

    makeSale: function(request, reply) {
        // var nonce = request.body.payment_method_nonce;
        braintree.makeSale(function(err, response) {
            console.log(response);
        });
    }

};
