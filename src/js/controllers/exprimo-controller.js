(function (gratus) {
  "use strict";

  gratus.controller('ExprimoController', [
    '$scope',
    '$state',
    'validation',
    'expressionesService',
    function ($scope, $state, validation, expressiones) {
      $scope.model = {
        expressio: ''
      };

      $scope.validation = validation.data.validators;

      $scope.expressioMessage = function () {
        return (
            (this.form.expressio.$dirty || this.form.submitted) &&
            this.form.expressio.$invalid
            );
      };

      $scope.messages = function () {
        return $scope.expressioMessage();
      };

      $scope.submit = function () {
        var form = this.form;

        form.submitted = true;

        if (form.$valid) {
          expressiones.create($scope.model)
              .then(function () {
                $state.go('expressiones.index');
              });
        }
      };
    }
  ]);
})(window.gratus);

