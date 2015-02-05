(function (gratus) {
  "use strict";

  gratus.controller('ExpressionesNavController', [
    '$scope',
    '$window',
    function ($scope, $window) {
      $scope.session = $window.sessionStorage;
    }
  ]);
})(window.gratus);

