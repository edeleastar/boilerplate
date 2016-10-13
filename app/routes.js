const Assets = require('./controllers/assets');
const Application = require('./controllers/application');

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
