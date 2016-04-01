'use strict';

describe('Service: hashtag', function () {

  // load the service's module
  beforeEach(module('theSharksApp'));

  // instantiate service
  var hashtag;
  beforeEach(inject(function (_hashtag_) {
    hashtag = _hashtag_;
  }));

  it('should do something', function () {
    expect(!!hashtag).toBe(true);
  });

});
