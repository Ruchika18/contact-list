(function(){
'use strict';

/**
 * @ngdoc function
 * @name contactBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactBookApp
 */
angular.module('contactBookApp').controller('MainCtrl', MainCtrl);
MainCtrl.$inject = [];
function MainCtrl() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();