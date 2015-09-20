module.exports = {

    home: function(request, reply) {
        reply.file('./public/views/index.html');
    },

    product: function(request, reply) {
        reply.file('./public/views/product.html');
    },

    emily: function(request, reply) {
        reply.file('./public/views/emily.html');
    },

    lukas: function(request, reply) {
        reply.file('./public/views/lukas.html');
    },

    hemyca: function(request, reply) {
        reply.file('./public/views/hemyca.html');
    }

};
