'use strict';

angular.module('myAppApp')
  .controller('ToDoList',
    ['$location', '$rootScope', 'APIService', '$scope',
     function($location, $rootScope, APIService, $scope){
       if( !$rootScope.uid ) {
           $location.path('/signin');
       }

       $scope.events = [];
       $scope.monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];

       $scope.openMenu = function(){
         $scope.$emit('openLeftMenu');
       }

       $scope.Skip = function(id){
         APIService.deleteEvent(id).then((resp) => {
            Update();
         });
       }

       var Update = function(){
         APIService.getEvents($rootScope.uid).then((resp) => {
           var resp = resp.data;

           if(!resp.type) return;
           resp.data.forEach(function(item){
             item.date = new Date(item.date);
           });

           $scope.events = resp.data;
         })
       }

       Update();

  }]);
