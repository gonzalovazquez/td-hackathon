'use strict';

describe('Directive: questionAnswerList', function () {

  // load the directive's module and view
  beforeEach(module('theSharksApp.questionAnswerList'));
  beforeEach(module('app/questionAnswerList/questionAnswerList.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<question-answer-list></question-answer-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the questionAnswerList directive');
  }));
});
