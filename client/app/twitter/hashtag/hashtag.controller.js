'use strict';
(function () {

  class HashtagComponent {
    constructor($stateParams, hashtagService) {
      this.hashtagService = hashtagService;
      this.hashtag = $stateParams.hashtag;
    }

    $onInit() {
      this.hashtagService.getHashtagStat(this.hashtag).then(result => {
        this.data = result;
      });
    }
  }

  angular.module('theSharksApp')
    .component('hashtag', {
      templateUrl: 'app/twitter/hashtag/hashtag.html',
      controller: HashtagComponent
    });
})();
