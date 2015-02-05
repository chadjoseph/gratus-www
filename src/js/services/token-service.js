(function (gratus) {
  "use strict";

  gratus.factory('tokenService', [
    '$http',
    '$window',
    'CONFIG',
    function ($http, $window, CONFIG) {
      return {
        create: function (creds) {
          return $http
              .post(CONFIG.API + '/tokens', creds)
              .success(function (data) {
                $window.sessionStorage.name = data.name;
                $window.sessionStorage.persona = data.persona;
                $window.sessionStorage.token = data.token;
              })
              .error(function () {
                delete $window.sessionStorage.name;
                delete $window.sessionStorage.persona;
                delete $window.sessionStorage.token;
              });
        },
        delete: function () {
          delete $window.sessionStorage.name;
          delete $window.sessionStorage.persona;
          delete $window.sessionStorage.token;
        }
      };
    }
  ]);
})(window.gratus);

