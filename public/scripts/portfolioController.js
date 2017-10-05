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


// function to submit email
vm.submitEmail = function() {
   var emailObject = {
     name: vm.name,
     email: vm.email,
     comments: vm.message
   };
   console.log('emailObject: ', emailObject);
   $http({
     method: 'POST',
     data: emailObject,
     url: '/portfolio'
   }).then(function (response){

   });
 }; // end submitEmail
