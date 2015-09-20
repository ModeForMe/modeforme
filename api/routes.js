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
    path: '/products/e1',
    handler: handlers.emily1
  },

  {
    method: 'GET',
    path: '/products/e2',
    handler: handlers.emily2
  },

  {
    method: 'GET',
    path: '/products/e3',
    handler: handlers.emily3
  },

  {
    method: 'GET',
    path: '/products/l1',
    handler: handlers.lukas1
  },

  {
    method: 'GET',
    path: '/products/l2',
    handler: handlers.lukas2
  },

  {
    method: 'GET',
    path: '/products/l3',
    handler: handlers.lukas3
  },

  {
    method: 'GET',
    path: '/products/h1',
    handler: handlers.hemyca1
  },

  {
    method: 'GET',
    path: '/products/h2',
    handler: handlers.hemyca2
  },

  {
    method: 'GET',
    path: '/products/h3',
    handler: handlers.hemyca3
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
