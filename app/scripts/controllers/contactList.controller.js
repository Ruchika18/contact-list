(function(){
'use strict';

/**
 * @ngdoc function
 * @name contactBookApp.controller:ContactListCtrl
 * @description
 * # ContactListCtrl
 * Controller of the contactBookApp
 */
angular.module('contactBookApp').controller('ContactListCtrl', ContactListCtrl);
ContactListCtrl.$inject = ['$scope','dataService','$log','contactListDataShareService'];
function ContactListCtrl($scope,dataService, $log, dataShareService) {
  $scope.tableHeading = [{
      'name': '#'
  },{
      'name': 'Name'
  },{
      'name' : 'Email Address'
  },{
      'name': 'Contact No'
  }];
  
  $scope.paginate = function(value) {
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.contactList.indexOf(value);
    return (begin <= index && index < end);
  };

  function onInit(){
    if(dataShareService.getContactList().length ===0){
      dataService.getContactInfo()
      .then(function(response){
          dataShareService.setContactList(response.data);
          $scope.contactList = angular.copy(dataShareService.getContactList());
          $scope.totalItems = $scope.contactList.length;
          $scope.currentPage = 1;
          $scope.numPerPage = 2;
          $scope.dataLoaded = true;
      },function(error){
          $log.log('error while retriving data',error);
      });
    }
    else{
        $scope.contactList = angular.copy(dataShareService.getContactList());
          $scope.totalItems = $scope.contactList.length;
          $scope.currentPage = 1;
          $scope.numPerPage = 2;
          $scope.dataLoaded = true;
    }
  }
  onInit();
  }
})();