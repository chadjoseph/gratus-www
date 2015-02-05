(function (gratus) {
  "use strict";

  gratus.controller('JoinController', [
    '$scope',
    '$state',
    'authService',
    'validation',
    'personasService',
    function ($scope, $state, auth, validation, personas) {
      $scope.model = auth.creds;

      $scope.validation = validation.data.validators;

      $scope.emailMessage = function () {
        return (
            !$scope.personaMessage() && !$scope.passwordMessage() && !$scope.nameMessage() &&
            (this.form.email.$dirty || this.form.submitted) &&
            this.form.email.$invalid
            );
      };

      $scope.nameMessage = function () {
        return (
            !$scope.personaMessage() && !$scope.passwordMessage() &&
            (this.form.name.$dirty || this.form.submitted) &&
            this.form.name.$invalid
            );
      };

      $scope.messages = function () {
        return (
            $scope.personaMessage() ||
            $scope.passwordMessage() ||
            $scope.nameMessage() ||
            $scope.emailMessage()
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
          personas.create($scope.model)
              .error(function (data, status) {
                switch (status) {
                  case 409:
                  {
                    form.persona.$setValidity('unique', false);
                    break;
                  }
                  case 422:
                  {
                    form.email.$setValidity('unique', false);
                    break;
                  }
                }
              })
              .success(function () {
                auth.login()
                    .then(function () {
                      $state.go('expressiones.exprimo')
                          .then(function () {
                            auth.creds.clear();

                            delete auth.creds.name;
                            delete auth.creds.email;
                          });
                    });
              });
        }
      };
    }
  ]);
})(window.gratus);

