module.exports = {

    home: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    designer: function(request, reply) {
        reply.file('./public/views/designer.html');
    },

    product: function(request, reply) {
        reply.file('./public/views/product.html');
    }

};
