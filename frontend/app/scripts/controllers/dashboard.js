'use strict';

angular.module('myAppApp')
  .controller('DashboardCtrl', ['$cookies', '$location', '$scope', '$rootScope', 'APIService', function($cookies, $location, $scope, $rootScope, APIService){
      if( !$rootScope.uid ) {
          $location.path('/signin');
      }

      $scope.description = "";
      $scope.events = [];
      $scope.eventsShow = [];

      $('#calendar').datetimepicker({
          inline: true,
          format: "MM/dd/YYYY"
      })
      $('#calendar *').on('click', function(){
        Update()
      })


      $scope.openMenu = function(){
        $scope.$emit('openLeftMenu');
      }

      $scope.openPopup = function(){
        $(".popup-wraper").toggle();
      }

      $scope.closePopup = function(){
        $(".popup-wraper").toggle();
      }

      $scope.AddEvent = function(){
        var date = $('#calendar').data("DateTimePicker").date();

        APIService.createEvent(  $scope.description, date._d, $rootScope.uid );
      }

      function Update(){
        APIService.getEvents($rootScope.uid).then(function(resp){
          var resp = resp.data;

          if(!resp.type) return;
          resp.data.forEach(function(item){
            item.date = new Date(item.date);
          });

          $scope.events = resp.data;

          var date = $('#calendar').data("DateTimePicker").date();
          $scope.eventsShow = [];
          $scope.events.forEach(function(el){
            if(el.date.getDate() == date._d.getDate()){
              $scope.eventsShow.push(el);
            }
          });
        })
      }

      Update();

  }]);
