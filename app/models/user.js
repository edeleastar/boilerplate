var Document = require('camo').Document;

class User extends Document {
  constructor() {
    super();

    this.firstName = String;
    this.lastName = String;
    this.email = String;
    this.password = String;
  }
}

module.exports = User;
