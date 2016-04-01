'use strict';

angular.module('theSharksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hashtag', {
        url: '/hashtag/:hashtag',
        template: '<hashtag></hashtag>'
      });
  });
