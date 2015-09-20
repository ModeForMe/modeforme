var handlers = require('./handlers.js');

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },

  {
    method: 'GET',
    path: '/product',
    handler: handlers.product
  },

  {
    method: 'GET',
    path: '/designers/emily',
    handler: handlers.emily
  },

  {
    method: 'GET',
    path: '/designers/lukas',
    handler: handlers.lukas
  },

  {
    method: 'GET',
    path: '/designers/hemyca',
    handler: handlers.hemyca
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
