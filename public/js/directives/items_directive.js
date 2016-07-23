App
.directive('itemCard', function($log, $timeout){
  return {
    restrict: 'A',
    templateUrl: 'js/views/item-card.html',
    scope: {
      item: '=',
      itemId: '='
    },
    controller: 'ItemController',
    link: function(scope, element){
      
    }
  };
});
