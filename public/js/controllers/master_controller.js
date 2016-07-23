/*global App: true, angular:true */
App.controller('MasterController', [
    '$scope',
    '$log',
    '$rootScope',
    '$stateParams',
    'getItems',
    'ItemsService',
    function($scope, $log, $rootScope, $stateParams, getItems, ItemsService) {
        'use strict';
        
        $scope.items = getItems.data;

        $scope.$on("collapseAllItems", () => $scope.$broadcast("doCollapseAllItems") );
    }
]);