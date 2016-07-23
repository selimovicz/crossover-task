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

    it("should reject the firewall because of fails", function() {
      expect(
        scope.getItemStatus({
          status: false,
          type: 'firewall',
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

    it("should reject the build because of fails", function() {
      expect(
        scope.getItemStatus({
          status: false,
          type: 'build',
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
      ).toEqual('failed');
    });


    it("should say the firewall is approved", function() {
      expect(
        scope.getItemStatus({
          status: false,
          completed: false,
          type: 'firewall',
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

    it("should say the build is succeeded", function() {
      expect(
        scope.getItemStatus({
          status: false,
          completed: false,
          type: 'build',
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
      ).toEqual('succeeded');
    });

    it("should say the build is completed", function() {
      expect(
        scope.getItemStatus({
          status: false,
          completed: true,
          type: 'build',
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
