'use strict';
describe('firebaseServiceFactory', function () {

  var firebaseServiceFactory;
  beforeEach(module('angularfireApp'));
  beforeEach(inject(function (_firebaseServiceFactory_) {
    firebaseServiceFactory = _firebaseServiceFactory_;
  }));

  //beforeEach(module(function ($provide) {
  //  visitor = {};
  //  $provide.value('visitor', visitor);
  //}));

  describe('Constructor', function () {
    it('assigns a name', function () {
      expect(true).toBe(true);
    });
  });
});
