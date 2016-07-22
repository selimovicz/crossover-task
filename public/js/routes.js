/*global App: true, angular:true */
App
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('location', {
                    url: '/',
                    templateUrl: 'js/views/initial_screen.html',
                    controller: 'MasterController',
                    resolve: {
                        getItems: function(ItemsService) {
                            return ItemsService.getItems();
                        }
                    }
                });
        }
    ]);