(function (gratus) {
  "use strict";

  gratus.factory('loadInterceptor', [
    'loadService',
    function (load) {
      return {
        request: function (config) {
          load.start();

          return config;
        },
        response: function (response) {
          load.stop();

          return response;
        }
      };
    }
  ]);
})(window.gratus);

