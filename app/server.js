'use strict';

const Hapi = require('hapi');
const start = require('./utils/hapi-start.js');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 4000 });
start(server);
