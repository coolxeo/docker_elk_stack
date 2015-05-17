'use strict';
describe('ResetPasswordCtrl', function () {
  var controller, scope, $rootscope, $location, firebaseServiceFactory, $q, ngNotify;

  beforeEach(module('angularfireApp'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _ngNotify_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    controller = _$controller_('ResetPasswordCtrl', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    $q = _$q_;
    ngNotify = _ngNotify_;
  }));

  describe('resetPassword Controller', function () {
    it('submit should call resetPassword and not fail', function () {
      var deferredSuccess = $q.defer();
      spyOn(firebaseServiceFactory, 'resetPassword').and.returnValue(deferredSuccess.promise);

      scope.resetPassword(true);

      expect(firebaseServiceFactory.resetPassword).toHaveBeenCalled();
      deferredSuccess.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should fail when called with invalid parameters', function () {
      var deferredSuccess = $q.defer();
      spyOn(ngNotify, 'set').and.returnValue(deferredSuccess.promise);

      scope.resetPassword(false);

      expect(ngNotify.set).toHaveBeenCalled();

      deferredSuccess.reject();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
  });
});
