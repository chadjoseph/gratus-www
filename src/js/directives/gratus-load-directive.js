(function (gratus) {
  "use strict";

  gratus.directive('gratusLoad', [
    'loadService',
    function (load) {
      return {
        link: function (scope, element) {
          scope.$watch(function () {
            return load.loading;
          }, function (loading) {
            if (loading) {
              element.addClass('loading');
            } else {
              element.removeClass('loading');
            }
          }, true);
        },
        restrict: 'A'
      };
    }
  ]);
})(window.gratus);

