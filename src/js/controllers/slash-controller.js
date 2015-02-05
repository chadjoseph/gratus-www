(function (gratus) {
  "use strict";

  gratus.controller('SlashController', [
    '$scope',
    '$route',
    '$location',
    function ($scope, $route, $location) {
      $scope.model = {
        placeholder: $route.current.params.query,
        slash: ''
      };

      $scope.submit = function () {
        if (this.form.$valid) {
          $location.path('/' + $scope.model.slash);
        }
      };
    }
  ]);
})(window.gratus);

