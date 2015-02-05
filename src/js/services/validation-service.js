(function (gratus) {
  "use strict";

  gratus.factory('validationService', [
    '$http',
    'CONFIG',
    function ($http, CONFIG) {
      return {
        show: function (section) {
          return $http
              .get(CONFIG.API + '/validation/' + section);
        }
      };
    }
  ]);
})(window.gratus);

