(function () {
    angular.module('salesTrackerApp')
        .service('mainService', mainService);
    mainService.$inject = ['$http'];
    function mainService($http) {
        var service = this;
        service.getBuyers = getBuyers;
        service.getBuyerById = getBuyerById;
        service.saveBuyer = saveBuyer;

        function getBuyers() {
            //var buyers = ['tanvir', 'satabdi', 'debu'];
           return $http({
                method: 'GET',
                url: 'http://localhost:8100/api/buyers/getbuyers'
            });
        }
        function getBuyerById(id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8100/api/buyers/getBuyerById',
                params: {id: id}
            });
        }

        function saveBuyer(buyer) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8100/api/buyers/savebuyer',
                data: buyer
            });
        }

    }
})();