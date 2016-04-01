'use strict';
(function(){

class TwitterComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('theSharksApp')
  .component('twitter', {
    templateUrl: 'app/twitter/twitter.html',
    controller: TwitterComponent
  });

})();
