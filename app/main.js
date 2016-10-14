'use strict';

const start = require('./utils/hapi-start.js');
const Application = require('./controllers/application');

const routes = [

  { method: 'GET', path: '/', config: Application.index },
  { method: 'GET', path: '/about', config: Application.about },

  { method: 'GET', path: '/{param*}', config: { auth: false }, handler: { directory: { path: 'public', } }, },
];

start(routes);
