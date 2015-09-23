var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 8080
});

server.route(require('./api/routes.js'));

server.start(function() {
    console.log('Server running at: ' + server.info.uri + '!');
});

module.exports = server;
