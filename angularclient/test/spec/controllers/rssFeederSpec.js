'use strict';
describe('RssFeederCtrl', function () {
  var controller, scope, $rootscope, $location, rssFeederService, $q, ngNotify;

  beforeEach(module('angularfireApp'));

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
      scope.rssFeeder('*');
      expect(rssFeederService.rssFeeder).toHaveBeenCalled();
      deferredSuccess.resolve(); // This makes sure that all callbacks of promises will be called
      scope.$digest();           // This makes sure that all callbacks of promises will be called
    });
    it('submit should call rssFeeder with a "random string query" and not fail', function () {
      var deferredSuccess = $q.defer();
      spyOn(rssFeederService, 'rssFeeder').and.callThrough(deferredSuccess.promise);
      scope.rssFeeder('random string');
      expect(rssFeederService.rssFeeder).toHaveBeenCalled();
    });
  });
});
