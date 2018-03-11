(function(){
    'use strict';

    angular.module('contactBookApp').factory('dataService',dataService);

    dataService.$inject = ['$http'];


    function dataService($http){
        var service = {
            getContactInfo : getContactInfo
        };

        var config = {
               headers : {'Accept' : 'application/json'}
        };
        function getContactInfo(){
            return $http.get('http://localhost:3000/contact',config);
        }
        return service;
    }

})();