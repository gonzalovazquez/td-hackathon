'use strict';

angular.module('theSharksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        template: '<main></main>'
      });
  });
