'use strict';

angular.module('myAppApp').directive('leftMenu',
  ['$rootScope', function($rootScope) {
      return {
        restrict: "E",
        templateUrl: "views/left-menu.html",
        controller: ["$scope", "$rootScope", function($scope, $rootScope) {
            console.log($rootScope);
        }]
      }
  }]);
