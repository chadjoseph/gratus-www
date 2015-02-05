(function (gratus) {
  "use strict";

  gratus.directive('gratusAuthorized', [
    function () {
      return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          ctrl.$parsers.unshift(function (value) {
            ctrl.$setValidity('authorized', true);
            return value;
          });
        },
        restrict: 'A'
      };
    }
  ]);
})(window.gratus);

