(function (gratus) {
  'use strict';

  gratus.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider
          .state('personas', {
            abstract: true
          })
          .state('personas.join', {
            url: '^/personas/join',
            views: {
              'content@': {
                controller: 'JoinController',
                resolve: {
                  validation: [
                    '$stateParams',
                    'validationService',
                    function ($stateParams, validationService) {
                      return validationService.show('join');
                    }
                  ]
                },
                templateUrl: 'templates/personas/join.html'
              }
            }
          })
          .state('personas.login', {
            url: '^/personas/login',
            views: {
              'content@': {
                controller: 'LoginController',
                templateUrl: 'templates/personas/login.html'
              }
            }
          })
          .state('personas.show', {
            url: '^/personas/{colon:[:]}{query:[a-z0-9]+}',
            views: {
              'content@': {
                controller: 'PersonasController',
                resolve: {
                  personas: [
                    '$stateParams',
                    'personasService',
                    function ($stateParams, personasService) {
                      return personasService.show($stateParams.query);
                    }
                  ]
                },
                templateUrl: 'templates/personas/show.html'
              }
            }
          });
    }]);
})(window.gratus);