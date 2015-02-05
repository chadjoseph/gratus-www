(function (gratus) {
  "use strict";

  gratus.directive('gratusCurrentState', [
    function () {
      return {
        link: function (scope, element) {
          scope.$on('$stateChangeSuccess',
              function (event, toState, toParams, fromState) {
                element
                    .removeClass(fromState.name.replace('.', ' '))
                    .addClass(toState.name.replace('.', ' '));
              });
        },
        restrict: 'A'
      };
    }
  ]);
})(window.gratus);

