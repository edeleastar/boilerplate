'use strict';

const main = require('./utils/hapi-start.js');

const Accounts = require('./controllers/accounts').Accounts;
const App      = require('./controllers/app').App;

const routes = [
  { method: 'GET',  path: '/',             handler: Accounts.start,         config: { auth: false } },
  { method: 'GET',  path: '/signup',       handler: Accounts.signup,        config: { auth: false } },
  { method: 'GET',  path: '/login',        handler: Accounts.login,         config: { auth: false } },
  { method: 'GET',  path: '/logout',       handler: Accounts.logout,        config: { auth: false } },
  { method: 'POST', path: '/register',     handler: Accounts.register,      config: { auth: false } },
  { method: 'POST', path: '/authenticate', handler: Accounts.authenticate,  config: { auth: false } },

  { method: 'GET',  path: '/home',         handler: App.home },
  { method: 'GET',  path: '/about',        handler: App.about },

  { method: 'GET',  path: '/{param*}',     config: { auth: false }, handler: { directory: { path: 'public', } }, },
];

main(routes);
