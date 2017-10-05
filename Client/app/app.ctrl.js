(function () {
    'use strict';

    angular
        .module('salesTrackerApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$rootScope'];

    function mainCtrl($rootScope) {
        $rootScope.title = "Sale Tracker";

        /* jshint validthis:true */
        var vm = this;
      
        vm.page = "Main page";
        activate();

        function activate() { }
    }
})();
