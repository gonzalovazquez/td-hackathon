'use strict';

describe('Directive: questions', function () {

  // load the directive's module and view
  beforeEach(module('theSharksApp.questions'));
  beforeEach(module('app/questions/questions.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<questions></questions>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the questions directive');
  }));
});
