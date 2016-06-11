'use strict';

angular.module('theSharksApp.questionService', []);
angular.module('theSharksApp.searchEngine', []);

angular.module('theSharksApp', [
    'theSharksApp.constants',
    'theSharksApp.questionService',
    'theSharksApp.searchEngine',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'firebase'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
