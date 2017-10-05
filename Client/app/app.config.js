(function () {
    'use strict';

    angular.module('salesTrackerApp')
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: './app/components/buyers/list/_list.html',
                controller: 'buyerListCtrl as buyerlist'
            })
        .when("/details/:buyerId?", {
            templateUrl: './app/components/buyers/details/_details.html',
            controller: 'buyerDetailsCtrl as buyerdetails'
        })
         .otherwise({ redirectTo: '/' });
    }
})();