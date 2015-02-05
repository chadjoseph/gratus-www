(function (gratus) {
  "use strict";

  gratus.factory('personasService', [
    '$http',
    'CONFIG',
    function ($http, CONFIG) {
      return {
        create: function (persona) {
          return $http
              .post(CONFIG.API + '/personas', persona);
        },
        show: function (persona) {
          return $http
              .get(CONFIG.API + '/personas/' + persona);
        }
      };
    }
  ]);
})(window.gratus);

