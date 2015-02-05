(function (gratus) {
  "use strict";

  gratus.factory('authService', [
    'tokenService',
    function (token) {
      return {
        creds: {
          persona: '',
          password: '',
          clear: function () {
            this.persona = '';
            this.password = '';
          }
        },
        login: function () {
          return token.create({
            persona: this.creds.persona,
            password: this.creds.password
          });
        },
        logout: function () {
          token.delete();

          this.creds.clear();
        }
      };
    }
  ]);
})(window.gratus);

