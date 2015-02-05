(function (gratus) {
  "use strict";

  gratus.controller('LoginController', [
    '$scope',
    '$state',
    'authService',
    function ($scope, $state, auth) {
      $scope.model = auth.creds;

      $scope.messages = function () {
        return (
            $scope.personaMessage() ||
            $scope.passwordMessage()
            );
      };

      $scope.passwordMessage = function () {
        return (
            !$scope.personaMessage() &&
            (this.form.password.$dirty || this.form.submitted) &&
            this.form.password.$invalid
            );
      };

      $scope.personaMessage = function () {
        return (
            (this.form.persona.$dirty || this.form.submitted) &&
            this.form.persona.$invalid
            );
      };

      $scope.submit = function () {
        var form = this.form;

        form.submitted = ++form.submitted || 1;

        if (form.$valid) {
          auth.login()
              .error(function () {
                auth.creds.clear();

                form.persona.$setValidity('authorized', false);
              })
              .success(function () {
                $state.go('expressiones.exprimo')
                    .then(function () {
                      auth.creds.clear();
                    });
              });
        }
      };
    }
  ]);
})(window.gratus);

