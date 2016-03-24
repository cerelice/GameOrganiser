'use strict';

angular.module('myAppApp')
  .controller('DashboardCtrl', ['$cookies', '$location', function($cookies, $location){
      if( !$cookies.get('user') ) {
          $location.path('/signin');
      }

      $('#calendar').datetimepicker({
          inline: true,
          format: "MM/dd/YYYY"
      });

  }]);
