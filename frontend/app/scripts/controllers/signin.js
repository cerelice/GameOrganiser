'use strict';

angular.module('myAppApp')
  .controller('SigninCtrl',
    ['VKService', '$cookies', '$location', '$rootScope',
     function(VKService, $cookies, $location, $rootScope){
       if( $rootScope.uid ) {
          $location.path('/');
       }

       $(".vk").unbind("click");
       $(".vk").bind("click", function(){
          VKService.LogInEvent();
       });
  }]);
