'use strict';
(function () {

  class TwitterComponent {
    constructor($state) {
      this.hashtag = '';
      this.$state = $state;
    }

    checkHashtag() {
      if (this.hashtag) {
        var cleanedHashtag = this.hashtag.replace(/ /g, '');
        if (cleanedHashtag) {
          this.$state.go('hashtag', {hashtag: cleanedHashtag})
        }
      }
    }
  }

  angular.module('theSharksApp')
    .component('twitter', {
      templateUrl: 'app/twitter/twitter.html',
      controller: TwitterComponent
    });
})
();
