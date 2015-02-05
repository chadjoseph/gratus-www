(function (gratus) {
  "use strict";

  gratus.controller('ExpressionesController', [
    '$scope',
    '$stateParams',
    'expressiones',
    function ($scope, $stateParams, expressiones) {
      $scope.model = {
        expressiones: expressiones.data.expressiones,
        query: $stateParams.query
      };
    }
  ]);
})(window.gratus);

