(function (gratus) {
  "use strict";

  gratus.factory('loadService', [
    function () {
      return {
        loading: false,
        start: function () {
          this.loading = true;
        },
        stop: function () {
          this.loading = false;
        }
      };
    }
  ]);
})(window.gratus);

