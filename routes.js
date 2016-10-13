const Assets = require('./app/controllers/assets');
const Application = require('./app/controllers/application');

module.exports = [

  { method: 'GET', path: '/', config: Application.index },
  { method: 'GET', path: '/about', config: Application.about },

  {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
  },
];
