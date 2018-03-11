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
  $scope.setForm = function (form) {
      $scope.contactInfo = form;
  };
  $scope.isPersonalEmail = true;
  $scope.isPersonalPhone = true;
  $scope.defaultEmailType = 'Work';
  $scope.defaultPhoneType = 'Work';
  $scope.emailTypes = ['Work','Personal'];
  $scope.phoneTypes = ['Work','Personal'];
  
  $scope.addEmail = function() {
   $scope.isWorkEmail = true;
  };
    
  $scope.removeWorkEmail = function() {
    $scope.isWorkEmail = false;
  };
  
  $scope.addPhone = function() {
    $scope.isWorkPhone = true;
  };
    
  $scope.removeWorkPhone = function() {
    $scope.isWorkPhone = false;
  };
  $scope.save = function(){
    dataShareService.addContactToList($scope.contact);
    //alert(JSON.stringify($scope.contact));
    $location.url('/contact/list');

  };
}
})();