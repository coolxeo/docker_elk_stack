'use strict';
describe('CreateUserCtrl', function () {
  var user = {}, controller, scope, $rootscope, $location, firebaseServiceFactory, $q, ngNotify;

  beforeEach(module('angularfireApp'));

  beforeEach(module(function ($provide) {
    $provide.value('user', user);
    $provide.value('isValid', true);
  }));
  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _ngNotify_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    controller = _$controller_('CreateUserCtrl', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    $q = _$q_;
    ngNotify = _ngNotify_;
  }));

  describe('createUser Controller', function () {
    it('submit should call createUser and not fail', function () {
      var deferredSuccess = $q.defer();
      spyOn(firebaseServiceFactory, 'createUser').and.returnValue(deferredSuccess.promise);

      scope.createUser = scope.createUser(true);

      expect(firebaseServiceFactory.createUser).toHaveBeenCalled();
      deferredSuccess.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should fail when called with invalid parameters', function () {
      var deferredSuccess = $q.defer();
      spyOn(ngNotify, 'set').and.returnValue(deferredSuccess.promise);

      scope.createUser = scope.createUser(false);

      expect(ngNotify.set).toHaveBeenCalled();

      deferredSuccess.reject();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
  });
});
