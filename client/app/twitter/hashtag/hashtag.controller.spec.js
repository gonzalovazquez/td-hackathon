'use strict';

describe('Component: HashtagComponent', function () {

  // load the controller's module
  beforeEach(module('theSharksApp'));

  var HashtagComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HashtagComponent = $componentController('HashtagComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
