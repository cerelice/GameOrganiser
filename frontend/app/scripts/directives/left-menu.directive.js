'use strict';

angular.module('myAppApp').directive('leftMenu',
  ['$rootScope', function($rootScope) {
      return {
        restrict: "E",
        templateUrl: "views/left-menu.html",
        controller: ["$scope", "$rootScope", function($scope, $rootScope) {
            $scope.$on('openLeftMenu', function (event, data) {
              $('left-menu').animate({left: '0px'}, 1000);
            });

            $scope.$on('closeLeftMenu', function (event, data) {
              $('left-menu').animate({left: '-300px'}, 1000);
            });

            $scope.close = function(){
              $scope.$emit('closeLeftMenu');
            }
        }]
      }
  }]);
