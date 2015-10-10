var handlers = require('./handlers.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.showHomePage
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
    path: '/apply',
    handler: handlers.showApplicationPage
  },

  {
    method: 'GET',
    path: '/contact',
    handler: handlers.showContactPage
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
