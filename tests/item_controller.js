describe("ItemController", function() {
    var $rootScope;
    var $controller;
    beforeEach(module("App"));
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        scope = $rootScope.$new();
        ItemController = $controller("ItemController", {$scope: scope});
    }));

    beforeEach(inject(function($controller) {
    }));

    it("should reject the build because of fails", function() {
      expect(
        scope.getItemStatus({
          status: false,
          metrics: {
            status: 'failed'
          },
          build: {
            status: 'failed'
          },
          unit: {
            status: 'failed'
          },
          functional: {
            status: 'failed'
          }
        })
      ).toEqual('rejected');
    });

    it("should say the build is approved", function() {
      expect(
        scope.getItemStatus({
          status: false,
          completed: false,
          metrics: {
            status: 'passed'
          },
          build: {
            status: 'passed'
          },
          unit: {
            status: 'passed'
          },
          functional: {
            status: 'passed'
          }
        })
      ).toEqual('approved');
    });

    it("should say the build is completed", function() {
      expect(
        scope.getItemStatus({
          status: false,
          completed: true,
          metrics: {
            status: 'passed'
          },
          build: {
            status: 'passed'
          },
          unit: {
            status: 'passed'
          },
          functional: {
            status: 'passed'
          }
        })
      ).toEqual('completed');
    });

});
