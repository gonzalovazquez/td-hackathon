'use strict';
(function(){

class HashtagComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('theSharksApp')
  .component('hashtag', {
    templateUrl: 'app/twitter/hashtag/hashtag.html',
    controller: HashtagComponent
  });

})();
