'use strict';

exports.index = {
  auth: false,

  handler: (request, reply) => {

    reply.view('index', { title: 'Welcome to the App' });

  },

};

exports.about = {
  auth: false,

  handler: (request, reply) => {

    reply.view('about', { title: 'About this App' });

  },

};
