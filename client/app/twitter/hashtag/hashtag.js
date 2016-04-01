'use strict';

angular.module('theSharksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hashtag', {
        url: '/hashtag',
        template: '<hashtag></hashtag>'
      });
  });
