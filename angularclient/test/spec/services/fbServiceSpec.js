'use strict';
describe('fbService', function () {

  var fbService;
  beforeEach(module("angularfireApp"));
  beforeEach(inject(function (_fbService_) {
    fbService = _fbService_;
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
