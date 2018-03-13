(function(){
    'use strict';

    angular.module('contactBookApp').factory('contactListDataShareService',contactListDataShareService);

    contactListDataShareService.$inject = [];


    function contactListDataShareService(){
        var service = {
            getContactList : getContactList,
            setContactList : setContactList,
            addContactToList: addContactToList
        };
        var contactList = [];

        function setContactList(list){
            contactList = angular.copy(list);

        }
        function getContactList(){
            return contactList;
        }

        function processContact(contactData){
            if(contactData.firstName && contactData.lastName && contactData.emailID && contactData.phoneNo){
            return {
                'id': contactList.length+1,
                'name': contactData.firstName + ' ' + contactData.lastName,
                'emailId': contactData.emailID,
                'contactNo': contactData.phoneNo
            };
            }
        }

        function addContactToList(contact){
            contactList.push(processContact(contact));
        }
        return service;
    }

})();