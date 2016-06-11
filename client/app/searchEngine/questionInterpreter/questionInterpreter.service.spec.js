'use strict';

describe('Service: questionInterpreter', function () {

  // load the service's module
  beforeEach(module('theSharksApp.searchEngine'));

  // instantiate service
  var questionInterpreter;
  beforeEach(inject(function (_questionInterpreter_) {
    questionInterpreter = _questionInterpreter_;
  }));

  it('should do something', function () {
    expect(!!questionInterpreter).toBe(true);
  });

});
