var handlers = require('./handlers.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },

  {
    method: 'GET',
    path: '/designers/{path*}',
    handler: handlers.showDesignerPage
  },

  {
    method: 'GET',
    path: '/products/{path*}',
    handler: handlers.showProductPage
  },

  {
    method: 'GET',
    path: '/api/{path*}',
    handler: handlers.api
  },

  {
    method: 'GET',
    path: '/static/{path*}',
    handler:  {
      directory: {
        path: './'
      }
    }
  }

];
