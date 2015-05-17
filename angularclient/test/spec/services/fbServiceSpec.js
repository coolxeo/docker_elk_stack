'use strict';
describe('firebaseServiceFactory', function () {
  var user = {}, controller, scope, $rootscope, $location, firebaseServiceFactory, $q;

  beforeEach(module('angularfireApp'));

  beforeEach(module(function ($provide) {
    $provide.value('user', user);
    $provide.value('isValid', true);
  }));
  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    controller = _$controller_('AuthWithPasswordCtrl', {
      $scope: scope
    });
    $location = _$location_;
    firebaseServiceFactory = _firebaseServiceFactory_;
    $q = _$q_;
  }));

  describe('authWithPassword Controller', function () {
    it('submit should call the firebaseServiceFactory with email and password and fail to authenticate', function () {
      var deferredSuccess = $q.defer();
      spyOn(firebaseServiceFactory, 'authWithPassword').and.returnValue(deferredSuccess.promise);
      //spyOn($location, 'authwithpassword');

      scope.authWithPassword = scope.authWithPassword(true);

      expect(firebaseServiceFactory.authWithPassword).toHaveBeenCalled();
      //expect(firebaseServiceFactory.authWithPassword).toHaveBeenCalledWith('misja', 'misja alma');

      deferredSuccess.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called

      //expect(scope.error).toBe(null);
      //expect($location.path).toHaveBeenCalledWith("/authwithpassword");
    });
  });
});
