(function (gratus) {
  'use strict';

  gratus
      .constant('CONFIG', (function () {
        var CONFIG = {
          HTTPS: 'https://www.gratus.io',
          API: 'http://api.gratus.io'
        };

        if (window.location.hostname !== 'www.gratus.io') {
          CONFIG.HTTPS = 'http://localhost:5000';
          CONFIG.API = 'http://localhost:8000';

          return CONFIG;
        }

        return CONFIG;
      })());
})(window.gratus);

