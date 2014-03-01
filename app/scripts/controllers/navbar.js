'use strict';

angular.module('repairkidcomApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Computer Repair',
      'link': '/computer-repair'
    },
    {
      'title': 'Other Services',
      'link': '/other-services'
    },
    {
      'title': 'Contact Us',
      'link': '/contact-us'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
