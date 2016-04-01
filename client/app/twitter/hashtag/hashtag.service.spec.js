'use strict';

describe('Service: hashtag', function () {

  // load the service's module
  beforeEach(module('theSharksApp'));

  // instantiate service
  var $rootScope, $httpBackend, hashtagService;
  beforeEach(inject(function (_$rootScope_, _hashtagService_) {
    $rootScope = _$rootScope_;
    hashtagService = _hashtagService_;
  }));

  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('api/twitters/hashtag/myHashTag').respond({
      tweets: [
        {name: 'tweet #1'},
        {name: 'tweet #2'},
        {name: 'tweet #3'},
        {name: 'tweet #4'},
        {name: 'tweet #5'}
      ]
    });
  }));

  it('should get the right counts', function () {
    hashtagService.getHashtagStat('myHashTag').then(function (result) {
      expect(result.data.tweets.length).toBe(5);
    });
    $rootScope.$digest();
    $httpBackend.flush();
  });

});
