/*global angular:true, is:true, console: true */
App.service('ItemsService', ['$http', '$q', '$location', 'conf', function($http, $q, $location, conf) {
    'use strict';

    var items = {};

    items.getItems = function() {
        return $http.get(conf.itemsPath).success(function(response) {
            return response.data;
        }, function(response) {
            return response.status;
        });
    };

    items.getSingleItem = function(id) {
        return $http.get(conf.singleItemPath + id).success(function(response) {
            return response.data;
        }, function(response) {
            return response.status;
        });
    };

    return items;
}]);