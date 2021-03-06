'use strict';

describe('firebaseFactory Spec', function () {

  var scope, $rootscope, $location, firebaseFactory, $q;

  beforeEach(module('angularfireApp'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseFactory_, _$q_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    $location = _$location_;
    firebaseFactory = _firebaseFactory_;
    $q = _$q_;
  }));

  it('is very true', function () {
    var deferredSuccess = $q.defer();
    spyOn(firebaseFactory, 'getFireBaseRef').and.returnValue(deferredSuccess.promise);
    firebaseFactory.getFireBaseRef('dummy user', undefined);
    expect(firebaseFactory.getFireBaseRef).toHaveBeenCalled();
  });

});
