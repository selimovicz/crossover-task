/*global App: true, angular:true */
App.controller('MasterController', [
    '$scope',
    '$log',
    '$rootScope',
    '$stateParams',
    'ItemsService',
    function($scope, $log, $rootScope, $stateParams, ItemsService) {
        'use strict';
        	

        $scope.currentTime = new Date();



        $scope.expandItem = function(){
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