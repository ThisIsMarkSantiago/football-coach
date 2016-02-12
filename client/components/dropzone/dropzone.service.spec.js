'use strict';

describe('Service: dropzone', function () {

  // load the service's module
  beforeEach(module('footballCoachApp'));

  // instantiate service
  var dropzone;
  beforeEach(inject(function (_dropzone_) {
    dropzone = _dropzone_;
  }));

  it('should do something', function () {
    expect(!!dropzone).toBe(true);
  });

});
