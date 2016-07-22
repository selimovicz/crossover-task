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
        
        $scope.items = getItems;

        $scope.currentTime = new Date();

        $scope.expandItem = function(id){

        	var id = 1;
        	ItemsService.getSingleItem(id).then(function(response){
        		console.log(response);
        	});
	      	if(!$scope.disableExpand){
	        	$scope.$emit('collapseAllItems'); // emiting upward that all other items shall be collapsed
	        	$scope.expandedItem = !$scope.expandedItem;

				$scope.unitPiechart = {
					labels: ["Passed", "Failed"],
					data: [750, 250],
					colors: ['#4cae4c', '#f0ad4e']
				};

				$scope.funPiechart = {
					labels: ["Passed", "Failed"],
					data: [200, 200],
					colors: ['#4cae4c', '#f0ad4e']
				};

				$scope.item = {};

				$scope.item.firstMessage = 'Change Accepted';
				$scope.item.secondMessage = 'Auto-Merged';
	      	}
       };
    }
]);