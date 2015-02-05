(function (gratus) {
  'use strict';

  gratus.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
          .state('expressiones', {
            abstract: true
          })
          .state('expressiones.exprimo', {
            url: '^/expressiones/exprimo',
            views: {
              'content@': {
                controller: 'ExprimoController',
                resolve: {
                  validation: [
                    '$stateParams',
                    'validationService',
                    function ($stateParams, validationService) {
                      return validationService.show('exprimo');
                    }
                  ]
                },
                templateUrl: 'templates/expressiones/exprimo.html'
              }
            }
          })
          .state('expressiones.index', {
            url: '/expressiones/',
            views: {
              'content@': {
                controller: 'ExpressionesController',
                resolve: {
                  expressiones: [
                    '$stateParams',
                    'expressionesService',
                    function ($stateParams, expressionesService) {
                      return expressionesService.index();
                    }
                  ]
                },
                templateUrl: 'templates/expressiones/index.html'
              }
            }
          })
          .state('expressiones.show', {
            url: '^/expressiones/{query:[a-z0-9]{32}}',
            views: {
              'content@': {
                controller: 'ExpressionesController',
                resolve: {
                  expressiones: [
                    '$stateParams',
                    'expressionesService',
                    function ($stateParams, expressionesService) {
                      return expressionesService.show($stateParams.query);
                    }
                  ]
                },
                templateUrl: 'templates/expressiones/show.html'
              }
            }
          })
          .state('expressiones.slash', {
            url: '^/expressiones/{query:[a-z0-9]+}',
            views: {
              'content@': {
                controller: 'ExpressionesController',
                resolve: {
                  expressiones: [
                    '$stateParams',
                    'expressionesService',
                    function ($stateParams, expressionesService) {
                      return expressionesService.by.slash($stateParams.query);
                    }
                  ]
                },
                templateUrl: 'templates/expressiones/by/slash.html'
              }
            }
          });
    }]);
})(window.gratus);