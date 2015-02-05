(function (gratus) {
  "use strict";

  gratus.controller('PersonaNavController', [
    '$scope',
    '$window',
    '$state',
    'authService',
    function ($scope, $window, $state, auth) {
      $scope.session = $window.sessionStorage;

      $scope.logout = function () {
        $state.go('expressiones.index')
            .then(function () {
              auth.logout();
            });
      };
    }
  ]);
})(window.gratus);

