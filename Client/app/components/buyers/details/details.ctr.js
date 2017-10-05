(function () {
    angular.module('salesTrackerApp')
        .controller('buyerDetailsCtrl', buyerDetailsCtrl);
    buyerDetailsCtrl.$inject = ['$rootScope', '$routeParams', 'mainService'];
    function buyerDetailsCtrl($rootScope, $routeParams, mainService) {
        var vm = this;
        vm.save = save;
        vm.buyer = {};
        vm.buyerId;


        active();

        function active() {
            vm.buyerId = $routeParams.buyerId;
            if (vm.buyerId > 0) {
                getBuyerById(vm.buyerId);
            }
        }
        function getBuyerById() {
            mainService.getBuyerById(vm.buyerId).then(function (res) {
                vm.buyer = res.data;
            }, function () { });
        }


        function save() {
            mainService.saveBuyer(vm.buyer).then(function (res) {
                vm.buyer = res.data;
                console.log(res);
            }, function () { });
        }
        $rootScope.title = "Buyer Details";

    }

})();