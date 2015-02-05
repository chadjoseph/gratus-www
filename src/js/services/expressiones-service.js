(function (gratus) {
  "use strict";

  gratus.factory('expressionesService', [
    '$http',
    'CONFIG',
    function ($http, CONFIG) {
      return {
        create: function (expressio) {
          return $http
              .post(CONFIG.API + '/expressiones', expressio);
        },
        index: function () {
          return $http
              .get(CONFIG.API + '/expressiones');
        },
        show: function (expressio) {
          return $http
              .get(CONFIG.API + '/expressiones/' + expressio);
        },
        by: {
          slash: function (slash) {
            return $http
                .get(CONFIG.API + '/expressiones/by/' + slash);
          }
        }
      };
    }
  ]);
})(window.gratus);

