(function () {
    angular.module('salesTrackerApp')
        .controller('buyerListCtrl', buyerListCtrl);
    buyerListCtrl.$inject = ['$rootScope', 'mainService'];
    function buyerListCtrl($rootScope, mainService) {
        var vm = this;
        $rootScope.title = "Buyer List";
        mainService.getBuyers().then(function (res) {
            vm.buyers = res.data;
        }, function (err) { });

        console.log(vm.buyers);


    }

})();