'use strict';

angular.module('myAppApp')
  .controller('SigninCtrl',
    ['VKService', '$cookies', '$location',
     function(VKService, $cookies, $location){
       if( $cookies.get('user') ) {
          $location.path('/');
       }

       $(".vk").unbind("click");
       $(".vk").bind("click", function(){
          VKService.LogInEvent();
       });
  }]);
