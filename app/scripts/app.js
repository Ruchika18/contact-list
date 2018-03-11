'use strict';

/**
 * @ngdoc overview
 * @name contactBookApp
 * @description
 * # contactBookApp
 *
 * Main module of the application.
 */
// angular
//   .module('contactBookApp', ['ngRoute'])
//   .config(function($routeProvider) {
var app = angular.module('contactBookApp', ['ngRoute','ui.bootstrap', 'ngResource']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './views/main.html',
        controller: 'MainCtrl'
    })
     .when('/contact/form', {
        templateUrl : './views/contactForm.html',
        controller: 'ContactFormCtrl'
    })
    .when('/contact/list', {
        templateUrl : './views/contactList.html',
        controller: 'ContactListCtrl'
    });
});
