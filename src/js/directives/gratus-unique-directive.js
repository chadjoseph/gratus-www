(function (gratus) {
  "use strict";

  gratus.directive('gratusUnique', [
    function () {
      return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          ctrl.$parsers.unshift(function (value) {
            ctrl.$setValidity('unique', true);
            return value;
          });
        },
        restrict: 'A'
      };
    }
  ]);
})(window.gratus);

