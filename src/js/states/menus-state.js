(function (gratus) {
  'use strict';

  gratus.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
          .state('menus', {
            abstract: true
          })
          .state('menus.gratus', {
            url: '^/menus/gratus',
            views: {
              'content@': {
                templateUrl: 'templates/menus/gratus.html'
              }
            }
          })
          .state('menus.expressiones', {
            url: '^/menus/expressiones',
            views: {
              'content@': {
                controller: 'ExpressionesNavController',
                templateUrl: 'templates/menus/expressiones.html'
              }
            }
          })
          .state('menus.persona', {
            url: '^/menus/persona',
            views: {
              'content@': {
                controller: 'PersonaNavController',
                templateUrl: 'templates/menus/persona.html'
              }
            }
          });
    }]);
})(window.gratus);