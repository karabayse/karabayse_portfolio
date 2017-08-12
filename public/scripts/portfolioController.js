/*****  Portfolio Controller  *****/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeController',
    controllerAs: 'HomeController as hc'
  }).when('/about', {
    templateUrl: '/views/about.html',
    controller: 'AboutController',
    controllerAs: 'AboutController as ac'
  }).when('/linkedin', {
    templateUrl: 'https://www.linkedin.com/in/karabayse/',
    controller: 'LinkedInController',
    controllerAs: 'LinkedInController as lic'
  }).when('/github', {
    templateUrl: 'https://github.com/karabayse',
    controller: 'GitHubController',
    controllerAs: 'GitHubController as ghc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); // end config
