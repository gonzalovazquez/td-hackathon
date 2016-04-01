'use strict';
(function () {

  class HashtagComponent {
    constructor($stateParams) {
      this.hashtag = $stateParams.hashtag;
    }
  }

  angular.module('theSharksApp')
    .component('hashtag', {
      templateUrl: 'app/twitter/hashtag/hashtag.html',
      controller: HashtagComponent
    });
})();
