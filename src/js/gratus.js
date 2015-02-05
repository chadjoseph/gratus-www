var gratus = window.angular.module('gratus', [
  'ngAnimate',
  'ngMessages',
  'ui.router'
]);

(function (gratus) {
  'use strict';

  gratus
      .config([
        '$compileProvider',
        '$urlRouterProvider',
        '$httpProvider',
        function ($compileProvider, $urlRouterProvider, $httpProvider) {
          $compileProvider
              .aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

          $urlRouterProvider.otherwise('/expressiones/');

          $httpProvider.interceptors.push('loadInterceptor');
          $httpProvider.interceptors.push('tokenInterceptor');
        }
      ]);
})(gratus);

