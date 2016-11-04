class Controller {

  static storeSession(request, userId) {
    request.cookieAuth.set({ loggedIn: true, loggedInUser: userId });
  }

  static getLoginId(request) {
    return request.auth.credentials.loggedInUser;
  }

  static clearSession(request) {
    request.cookieAuth.clear();
  }
}

module.exports = Controller;
