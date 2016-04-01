'use strict';

describe('Component: TwitterComponent', function () {

  // load the controller's module
  beforeEach(module('theSharksApp'));

  var TwitterComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TwitterComponent = $componentController('twitter', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
