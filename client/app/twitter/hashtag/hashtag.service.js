'use strict';

angular.module('theSharksApp')
  .service('hashtagService', function ($http) {
    this.getHashtagStat = function (hashtag) {
      return $http.get(`api/twitters/hashtag/${hashtag}`);
    }
  });
