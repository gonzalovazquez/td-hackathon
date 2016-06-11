'use strict';
(function() {

  class TwitterComponent {
    constructor($state, $firebaseObject) {
      this.hashtag = '';
      this.$state = $state;
      this.$firebaseObject = $firebaseObject;

      console.log($firebaseObject);
      this.data = this.$firebaseObject(new Firebase("https://iubadminton.firebaseio.com/playing_locations"));
      console.log(this.data);
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
