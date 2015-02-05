(function (gratus) {
  "use strict";

  gratus.controller('PersonasController', [
    '$scope',
    '$stateParams',
    'personas',
    function ($scope, $stateParams, personas) {
      $scope.model = {
        query: $stateParams.query,
        doc: personas.data.doc,
        expressiones: personas.data.expressiones,
        persona: personas.data.persona
      };
    }
  ]);
})(window.gratus);

