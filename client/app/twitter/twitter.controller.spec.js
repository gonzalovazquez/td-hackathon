'use strict';

describe('Component: TwitterComponent', function () {

  // load the controller's module
  beforeEach(module('theSharksApp'));

  var TwitterComponent, scope, $rootScope, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, _$rootScope_, _$location_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $location = _$location_;
    TwitterComponent = $componentController('twitter', {
      $scope: scope,
      $location: $location
    });
  }));

  beforeEach(inject(function ($httpBackend) {
    $httpBackend.expectGET('twitter/twitter.html').respond(200, 'Twitter HTML');
  }));

  it('should reject undefined hashtag', function () {
    _loadAndVerifyPath(undefined, '/');
  });

  it('should reject empty hashtag', function () {
    _loadAndVerifyPath('   ', '/');
  });

  it('should accept good hashtag', function () {
    _loadAndVerifyPath('helloThere', '/hashtag/helloThere');
  });

  it('should work with these values', function () {
    var hashtagPathPairs = [
      {hashtag: null, path: '/'},
      {hashtag: '', path: '/'},
      {hashtag: 'something with spaces', path: '/hashtag/somethingwithspaces'},
      {hashtag: 'Something   With  Multiple Spaces', path: '/hashtag/SomethingWithMultipleSpaces'},
      {hashtag: '  SomethingSurroundedBySpaces  ', path: '/hashtag/SomethingSurroundedBySpaces'}
    ];
    hashtagPathPairs.forEach(function (hashtagPath) {
      _loadAndVerifyPath(hashtagPath.hashtag, hashtagPath.path);
    });
  });

  function _loadAndVerifyPath(hashtag, path) {
    TwitterComponent.hashtag = hashtag;
    TwitterComponent.checkHashtag();
    $rootScope.$digest();
    expect($location.path()).toEqual(path);
  }
});
