'use strict';

angular.module('theSharksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('twitter', {
        url: '/twitter',
        template: '<twitter></twitter>'
      });
  });
