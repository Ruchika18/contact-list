'use strict';

describe('Controller: ContactFormCtrl', function () {

  beforeEach(module('contactBookApp'));

  var ContactFormCtrl,
    scope;
  var contact = {
    'emailID':[{
      'type':'Work',
      'emailId':''
    }],
    'phoneNo':[{
      'type':'Work',
      'phoneNo':''
    }]
  };

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactFormCtrl = $controller('ContactFormCtrl', {
      $scope: scope
    });
  }));

  it('should initialize a contact list properly', function () {
    expect($scope.contact).toEqual(contact);
  });

  it('should initialize a email/phone types options', function () {
    expect($scope.types).toEqual(['Work','Personal']);
  });
});
