'use strict';
describe('fbService', function () {

  var fbService;
  beforeEach(module('angularfireApp'));
  beforeEach(inject(function (_fbService_) {
    fbService = _fbService_;
  }));

  describe('Constructor', function () {
    it('assigns a name', function () {
      expect(true).toBe(true);
    });
  });
});
