/*****  Portfolio Controller  *****/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeController',
    controllerAs: 'HomeController as hc'
  }).when('/work', {
    templateUrl: '/views/work.html',
    controller: 'WorkController',
    controllerAs: 'WorkController as wc'
  }).when('/contact', {
    templateUrl: '/views/contact.html',
    controller: 'ContractController',
    controllerAs: 'ContactController as cc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); // end config
