'use strict';

describe('Service: answerMatcher', function () {

  // load the service's module
  beforeEach(module('theSharkApp.searchEngine'));

  // instantiate service
  var answerMatcher;
  beforeEach(inject(function (_answerMatcher_) {
    answerMatcher = _answerMatcher_;
  }));

  it('should do something', function () {
    expect(!!answerMatcher).toBe(true);
  });

});
