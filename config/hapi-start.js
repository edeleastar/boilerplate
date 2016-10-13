'use strict';

const Hapi = require('hapi');
const routes = require('./../routes');

module.exports = function (server) {

  server.register([
    require('inert'),
    require('vision'),
    require('hapi-auth-cookie'),
  ], err => {

    if (err) {
      throw err;
    }

    server.views({
      engines: {
        hbs: require('handlebars'),
      },
      relativeTo: __dirname,
      path: '../views',
      layoutPath: '../views/layout',
      partialsPath: '../views/partials',
      layout: true,
      isCached: false,
    });

    server.auth.strategy('standard', 'cookie', {
      password: 'secretpasswordnotrevealedtoanyone',
      cookie: 'boilerplate-cookie',
      isSecure: false,
      ttl: 24 * 60 * 60 * 1000,
      redirectTo: '/',
    });

    server.auth.default({
      strategy: 'standard',
    });

    server.route(routes);

    server.start((err) => {
      if (err) {
        throw err;
      }

      console.log('Server listening at:', server.info.uri);
    });

  });
};
