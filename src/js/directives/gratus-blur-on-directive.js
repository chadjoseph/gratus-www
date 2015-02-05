(function (gratus) {
  "use strict";

  gratus.directive('gratusBlurOn', [
    '$document',
    function ($document) {
      return {
        link: function (scope, elm, attrs) {
          scope.$watch(attrs.gratusBlurOn, function (value) {
            if (value) {
              $document[0].activeElement.blur();
            }
          }, true);
        },
        restrict: 'A'
      };
    }
  ]);
})(window.gratus);

