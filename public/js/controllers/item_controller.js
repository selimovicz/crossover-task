/*global App: true, angular:true */
App.controller('ItemController', [
    '$scope',
    '$log',
    '$timeout',
    'ItemsService',
    function($scope, $log, $timeout, ItemsService) {
        'use strict';

        $scope.expandItem = function(item){

        	ItemsService.getSingleItem($scope.itemId).then(function(response){

	        	$scope.$emit('collapseAllItems'); // emiting upward that all other items shall be collapsed
	        	if(item.status != 'pending'){ $scope.item.expandedItem = !$scope.item.expandedItem; }

				$scope.item.unitPiechart = {
					labels: ["Failed", "Passed"],
					data: [item.unit.testFailed, item.unit.testPassed],
					colors: ['#f0ad4e', '#4cae4c']
				};
				$scope.item.unit.testPercentage = Math.round((item.unit.testPassed/(item.unit.testPassed + item.unit.testFailed))*100);
				
				$scope.item.funPiechart = {
					labels: ["Failed", "Passed"],
					data: [item.functional.testFailed, item.functional.testPassed],
					colors: ['#f0ad4e', '#4cae4c']
				};
				$scope.item.functional.testPercentage = Math.round((item.functional.testPassed/(item.functional.testPassed + item.functional.testFailed))*100);
	      	});
	      	
        };


        $scope.progressBarColor = function(item){
        	if(item.status == 'running'){
        		return 'primary';
        	}else if(item.status == 'failed'){
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
	                	if(item.type == 'build'){
	                    	return 'succeeded';
	                	}else{
	                		return 'approved';
	                	}
	                }
	            }else{
	            	if(item.type == 'build'){
	            		return 'failed';
	            	}else{
	            		return 'rejected';
	            	}
	            }
	        }
            return item.status;
        };

        // mimicking deploy to production
        $scope.deployToProduction = function(){
        	$scope.deployingToProduction = true;
        }

        $scope.$on('doCollapseAllItems', function(c){
			if($scope.item.expandedItem){
				$timeout(function(){
					$scope.item.expandedItem = false;
				});
			}
	    });

    }
]);