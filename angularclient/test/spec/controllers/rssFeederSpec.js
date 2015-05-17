'use strict';
describe('RssFeederCtrl', function () {
  var user = {}, controller, scope, $rootscope, $location, rssFeederService, $q, ngNotify;

  beforeEach(module('angularfireApp'));

  //beforeEach(module(function ($provide) {
  //  $provide.value('user', user);
  //  $provide.value('isValid', true);
  //}));
  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _rssFeederService_, _$q_, _ngNotify_) {
    scope = _$rootScope_.$new();
    $rootscope = _$rootScope_;
    controller = _$controller_('RssFeederCtrl', {
      $scope: scope
    });
    $location = _$location_;
    rssFeederService = _rssFeederService_;
    $q = _$q_;
    ngNotify = _ngNotify_;
  }));

  describe('rssFeeder Controller', function () {
    it('submit should call rssFeeder with a "ANY query" and not fail', function () {
      var deferredSuccess = $q.defer();
      spyOn(rssFeederService, 'rssFeeder').and.returnValue(deferredSuccess.promise);

      scope.rssFeeder = scope.rssFeeder('*');

      expect(rssFeederService.rssFeeder).toHaveBeenCalled();
      deferredSuccess.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should call rssFeeder with a "random string query" and not fail', function () {
      var deferredSuccess = $q.defer();
      spyOn(rssFeederService, 'rssFeeder').and.returnValue(deferredSuccess.promise);

      scope.rssFeeder = scope.rssFeeder('random string');

      expect(rssFeederService.rssFeeder).toHaveBeenCalled();

      deferredSuccess.resolve();
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should call rssFeeder and fail', function () {
      //var deferredSuccess = $q.defer();
      ////spyOn(ngNotify, 'set').and.returnValue(deferredSuccess.promise);
      //
      //scope.rssFeeder = scope.rssFeeder('random string');
      //
      //expect($scope.news).not.null();
      //
      //deferredSuccess.resolve();
      //scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
  });
});
