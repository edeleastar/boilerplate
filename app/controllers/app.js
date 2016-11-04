'use strict';
const Controller = require('../utils/controller');

class App extends Controller {

  static home(request, reply) {
    const userId = Controller.getLoginId(request);
    const viewData = {
      title: `Welcome  ${userId}`,
    };
    reply.view('home', viewData);
  }

  static about(request, reply) {
    const viewData = {
      title: 'About this App',
    };
    reply.view('about', viewData);
  }
}

module.exports.App = App;
