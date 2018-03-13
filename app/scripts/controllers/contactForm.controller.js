(function(){
'use strict';

/**
 * @ngdoc function
 * @name contactBookApp.controller:ContactFormCtrl
 * @description
 * # ContactFormCtrl
 * Controller of the contactBookApp
 */
angular.module('contactBookApp').controller('ContactFormCtrl', ContactFormCtrl);
ContactFormCtrl.$inject = ['$scope','$log','contactListDataShareService','$location'];
function ContactFormCtrl($scope, $log, dataShareService, $location) {
  $scope.contact = {
    'emailID':[{
      'type':'Work',
      'emailId':''
    }],
    'phoneNo':[{
      'type':'Work',
      'phoneNo':''
    }]
  };
  $scope.types = ['Work','Personal'];
  
  $scope.addEmail = function() {
    $scope.contact.emailID.push({
      'type':'Work',
      'emailId':''
    });
  };
  $scope.addPhone = function(){
    $scope.contact.phoneNo.push({
      'type':'Work',
      'phoneNo':''
    });
  };
    
  $scope.removeEmail = function() {
    $scope.contact.emailID.pop();
  };
    
  $scope.removePhone = function() {
    $scope.contact.phoneNo.pop();
  };
  $scope.save = function(){
    dataShareService.addContactToList($scope.contact);
    $location.url('/contact/list');
  };
}
})();