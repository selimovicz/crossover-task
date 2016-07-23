/*global App: true, angular:true */
App.controller('ItemController', [
    '$scope',
    '$log',
    '$timeout',
    'ItemsService',
    function($scope, $log, $timeout, ItemsService) {
        'use strict';

        $scope.expandItem = function(item){

        	var id = '3a4e094c703130a20cdb51f3a5b6409a63607254';
        	if(item.status != 'pending'){
	        	ItemsService.getSingleItem(id).then(function(response){

		        	$scope.$emit('collapseAllItems'); // emiting upward that all other items shall be collapsed
		        	$scope.item.expandedItem = !$scope.item.expandedItem;

					$scope.item.unitPiechart = {
						labels: ["Failed", "Passed"],
						data: [item.unit.testFailed, item.unit.testPassed],
						colors: ['#f0ad4e', '#4cae4c']
					};
					$scope.item.unit.testPercentage = Math.round((item.unit.testPassed/(item.unit.testPassed + item.unit.testFailed))*100);
					console.log($scope.item.unit.testPercentage);
					$scope.item.funPiechart = {
						labels: ["Failed", "Passed"],
						data: [item.functional.testFailed, item.functional.testPassed],
						colors: ['#f0ad4e', '#4cae4c']
					};
					$scope.item.functional.testPercentage = Math.round((item.functional.testPassed/(item.functional.testPassed + item.functional.testFailed))*100);
		      	});
	      	}
        };


        $scope.progressBarColor = function(item){
        	if(item.status == 'running'){
        		return 'primary';
        	}else if(item.status == 'rejected'){
        		return 'danger';
        	}else{
        		return 'success';
        	}
        };

        $scope.getItemStatus = function(item){
        	if(!item.status){
	            if(item.metrics.status == 'passed' && item.build.status == 'passed' && item.unit.status == 'passed' && item.functional.status == 'passed'){
	                if(item.completed){
	                    return 'completed';
	                }else{
	                    return 'approved';
	                }
	            }else{
	                return 'rejected';
	            }
	        }
            return item.status;
        };

        $scope.$on('doCollapseAllItems', function(c){
			if($scope.item.expandedItem){
				$timeout(function(){
					$scope.item.expandedItem = false;
				});
			}
	    });

    }
]);