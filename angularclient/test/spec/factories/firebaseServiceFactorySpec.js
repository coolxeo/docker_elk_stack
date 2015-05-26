'use strict';

describe('firebaseServiceFactory Spec', function () {

  var scope, $rootscope, $location, firebaseServiceFactory, firebaseFactory, $q;

  beforeEach(module('angularfireApp'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _firebaseFactory_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    firebaseFactory = _firebaseFactory_;
    $q = _$q_;
  }));

  it('should call mocked firebaseServiceFactory resetPassword factory', function () {
    var deferredSuccess = $q.defer();
    spyOn(firebaseFactory, 'resetPassword').and.returnValue(deferredSuccess.promise);
    scope.user = {email: 'dummy@email.com'};
    firebaseServiceFactory.resetPassword(scope);
    expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
    deferredSuccess.resolve();
    scope.$digest();
  });

});
