var braintree = require("./braintree.js");
var mandrill = require("./mandrill.js");
var fs = require("fs");

// variables for cart
var item;
var designer;
var image;
var price;

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

    clickPurchase: function(request, reply) {
        item = request.payload.item;
        designer = request.payload.designer;
        image = request.payload.image;
        price = request.payload.price;
        reply.redirect("/cart");
    },

    cart: function(request, reply) {
        var assembledCartPage;

        fs.readFile("./public/views/cart.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                assembledCartPage = data.replace('<i id="item-name"></i>', '<i id="item-name">' + item +'</i>').replace('<span id="designer-name"></span>', '<span id="designer-name">' + designer + '</span>').replace('<span id="designer-name"></span>', '<span id="designer-name">' + designer + '</span>').replace('<img id="image-src" src="">', '<img id="image-src" src="' + image + '">').replace('<p id="item-price">£</p>', '<p id="item-price">£' + price + '</p>').replace('<img id="image-src" src="">', '<img id="image-src" src="' + image + '">').replace('<h3 class="total">TOTAL £</h3>', '<h3 class="total">TOTAL £' + price + '</h3>');
                reply(assembledCartPage);
            }
        });
    },

    checkout: function(request, reply) {
        var assembledCheckoutPage;

        fs.readFile("./public/views/checkout.html", "utf-8", function (err, data) {

            if (err) {
                console.log(err);
            } else {
                assembledCheckoutPage = data.replace('<input type="submit" value="Pay £">', '<input type="submit" value="Pay £' + price + '">');
                reply(assembledCheckoutPage);
            }
        });
    },

    success: function(request, reply) {
        reply.file('./public/views/success.html');
    },

    braintreeToken: function(request, reply) {
        braintree.getClientToken(function(err, token) {
            reply(token);
        });
    },

    makeSale: function(request, reply) {
        var amount = price;
        // var nonce = request.body.payment_method_nonce;
        var nonce = "fake nonce";
        var email = "msmichellecatherine@gmail.com";

        braintree.makeSale(amount, nonce, function(err, data) {
            if (data.success === true) {
                mandrill.sendPurchaseConfirmation(email, function() {
                    reply.redirect("/success");
                });
            }
        });
    }

};
