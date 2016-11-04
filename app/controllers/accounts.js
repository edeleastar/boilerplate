'use strict';
const Controller = require('../utils/controller');

const User = require('../models/user');

class Accounts extends Controller {
  static start(request, reply) {
    const viewData = {
      title: 'Sign up or Login to Service',
    };
    reply.view('start', viewData);
  }

  static signup(request, reply) {
    const viewData = {
      title: 'Sign up for the Service',
    };
    reply.view('signup', viewData);
  }

  static login(request, reply) {
    const viewData = {
      title: 'Login to the Service',
    };
    reply.view('login', viewData);
  }

  static logout(request, reply) {
    Controller.clearSession(request);
    reply.redirect('/');
  }

  static register(request, reply) {
    const user = User.create(request.payload);
    user.save().then(newUser => {
      reply.redirect('/login');
    }).catch(err => {
      reply.redirect('/');
    });
  }

  static authenticate(request, reply) {
    const user = request.payload;
    User.findOne({ email: user.email }).then(foundUser => {
      if (foundUser && foundUser.password === user.password) {
        Controller.storeSession(request, user.email);
        reply.redirect('/home');
      } else {
        reply.redirect('/signup');
      }
    }).catch(err => {
      reply.redirect('/');
    });
  }
}

exports.Accounts = Accounts;
