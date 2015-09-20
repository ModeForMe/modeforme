var handlers = require('./handlers.js');

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },

  {
    method: 'GET',
    path: '/designer',
    handler: handlers.designer
  },

  {
    method: 'GET',
    path: '/product',
    handler: handlers.product
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
