'use strict';

angular.module('myAppApp')
  .controller('DashboardCtrl', ['$cookies', '$location', '$scope', '$rootScope', function($cookies, $location, $scope, $rootScope){
      if( !$rootScope.uid ) {
          $location.path('/signin');
      }

      $('#calendar').datetimepicker({
          inline: true,
          format: "MM/dd/YYYY"
      });

  }]);
