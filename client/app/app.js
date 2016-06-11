'use strict';

angular.module('theSharksApp.questionService', []);
angular.module('theSharksApp.searchEngine', []);
angular.module('theSharksApp.question', []);

angular.module('theSharksApp', [
    'theSharksApp.constants',
    'theSharksApp.questionService',
    'theSharksApp.searchEngine',
    'theSharksApp.question',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'ngTouch'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
