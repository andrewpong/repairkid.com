'use strict';

angular.module('repairkidcomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/computer-repair', {
        templateUrl: 'partials/computer-repair',
        controller: 'MainCtrl'
      })
      .when('/other-services', {
        templateUrl: 'partials/other-services',
        controller: 'MainCtrl'
      })
      .when('/contact-us', {
        templateUrl: 'partials/contact-us',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });