//'use strict';
//describe('LogoutCtrl', function () {
//  var user = {}, controller, scope, $rootscope, $location, firebaseServiceFactory, $q, $window;
//
//  beforeEach(module('angularfireApp'));
//
//  beforeEach(module(function ($provide) {
//    $provide.value('user', user);
//    $provide.value('isValid', true);
//  }));
//  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _firebaseServiceFactory_, _$q_, _$window_) {
//    scope = _$rootScope_.$new();
//    $rootscope = _$rootScope_;
//    controller = _$controller_('LogoutCtrl', {
//      $scope: scope
//    });
//    $location = _$location_;
//    firebaseServiceFactory = _firebaseServiceFactory_;
//    $q = _$q_;
//    $window = _$window_;
//  }));
//
//  describe('logout Controller', function () {
//    it('submit should call the firebaseServiceFactory with email and password and fail to authenticate', function () {
//      var deferredSuccess = $q.defer();
//      $window.authData = 'Dummy Token Imaginary Data';
//      //spyOn(scope, 'logout').and.returnValue(deferredSuccess.promise);
//
//      scope.logout = scope.logout();
//
//      //expect(scope.logout).toHaveBeenCalled();
//      deferredSuccess.resolve();
//      scope.$digest();           // This makes sure that all callbacks of promises will be called
//    });
//    it('submit should fail when called with invalid parameters', function () {
//      var deferredSuccess = $q.defer();
//      //spyOn(scope, 'logout').and.returnValue(deferredSuccess.promise);
//
//      scope.logout = scope.logout();
//
//      //expect(scope.logout).toHaveBeenCalled();
//
//      deferredSuccess.reject();
//      scope.$digest();           // This makes sure that all callbacks of promises will be called
//    });
//  });
//});
