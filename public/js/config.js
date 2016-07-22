/*global App: true */
var App = angular.module('App', [
        'ui.router',
        'ui.bootstrap',
        'chart.js'
    ])
    .constant('conf', {
        itemsPath: '/items',
        singleItemPath: /item/,
    });